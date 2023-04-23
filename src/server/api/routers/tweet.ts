import { protectedProcedure, publicProcedure } from "../trpc";
import { createTRPCRouter } from "../trpc";
import { z } from "zod";
export const tweetRouter = createTRPCRouter({
  getTweetsByIds: protectedProcedure
    .input(
      z.object({
        ids: z.array(z.string()),
      })
    )
    .query(async ({ ctx, input: { ids } }) => {
      const account = await ctx.prisma.account.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });

      if (account?.access_token) {
        const client = ctx.twitterClient(account.access_token);
        const tweets = await client.tweets.findTweetsById({
          ids,
          "tweet.fields": [
            "created_at",
            "entities",
            "public_metrics",
            "text",
            "author_id",
          ],
        });
        return tweets;
      }
    }),
  makeTweet: publicProcedure
    .input(z.object({ text: z.string(), userId: z.string() }))
    .mutation(async ({ ctx, input: { text, userId } }) => {
      const secrets = await ctx.prisma.twitter.findFirst({
        where: {
          id: userId,
        },
      });
      console.log(secrets);

      if (secrets?.bearerToken) {
        try {
          const client = ctx.twitterClient(secrets?.bearerToken);
          console.log({ client });
          const tweet = await client.tweets.createTweet({
            text,
          });
          console.log({ tweet });
          return tweet;
        } catch (e) {
          console.error(e);
        }
      }
    }),
  addSecrets: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        bearerToken: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { userId, bearerToken } }) => {
      try {
        await ctx.prisma.twitter.create({
          data: {
            bearerToken,
            id: userId,
          },
        });
      } catch (e) {
        console.error(e);
      }
    }),
  scheduleTweets: protectedProcedure
    .input(
      z.object({
        tweets: z.array(
          z.object({ text: z.string(), scheduled_at: z.string() })
        ),
      })
    )
    .mutation(async ({ ctx, input: { tweets } }) => {
      const account = await ctx.prisma.account.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });
      try {
        await ctx.cronJobServer.post("schedule_tweets", {
          schedule_tweets: tweets,
          token: account?.access_token,
        });
      } catch (e) {
        console.error(e);
      }
      return "success";
    }),
});
