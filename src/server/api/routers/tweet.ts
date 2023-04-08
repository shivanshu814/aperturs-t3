import { protectedProcedure } from "../trpc";
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
  makeTweet: protectedProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input: { text } }) => {
      const account = await ctx.prisma.account.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });

      if (account?.access_token) {
        const client = ctx.twitterClient(account.access_token);
        const tweet = await client.tweets.createTweet({
          text,
        });
        return tweet;
      }
    }),
    scheduleTweets: protectedProcedure.input(z.object({
        tweets: z.array(
            z.object({
                text: z.string(),
                scheduled_at: z.string(),
            })
        )
    })).mutation(async ({ ctx, input: { tweets } }) => {
        
    })
});
