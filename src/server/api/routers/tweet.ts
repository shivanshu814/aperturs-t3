import { AuthClient } from "twitter-api-sdk/dist/types";
import { protectedProcedure } from "../trpc";
import { createTRPCRouter } from "../trpc";
import { z } from "zod";
import { auth } from "twitter-api-sdk";
import { TwitterApi } from "twitter-api-v2";
import { env } from "~/env.mjs";
import axios from "axios";
import Twitter from "twitter-lite";
function stringToBase64(str: string) {
  return Buffer.from(str).toString("base64");
}

const string1 = "Hello, ";
const string2 = "World!";
const concatenatedString = string1 + string2;
const base64String = stringToBase64(concatenatedString);

console.log(base64String);
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
        // const client = ctx.twitterClient(account.access_token);
        // new auth.OAuth2User({
        //   token: ,
        //   callback: "http://localhost:3000/api/auth/callback/twitter",
        //   client_id: env.TWITTER_CLIENT_ID,
        //   client_secret: env.TWITTER_CLIENT_SECRET,
        //   scopes: [
        //     "users.read",
        //     "tweet.write",
        //     "tweet.moderate.write",
        //     "bookmark.read",
        //     "bookmark.write",
        //     "tweet.read",
        //     "offline.access",
        //     "like.read",
        //     "list.read",
        //   ],
        // });
        // new auth.OAuth2Bearer(account.access_token).getAuthHeader().Authorization

        try {
          // const twitterApi = new TwitterApi({
          //   clientId: env.TWITTER_CLIENT_ID,
          //   clientSecret: env.TWITTER_CLIENT_SECRET,

          // });
          // console.log(account.refresh_token, "refresh_token");
          // const response = await axios
          //   .post(
          //     "https://api.twitter.com/2/oauth2/token",
          //     `refresh_token=${account.refresh_token}&grant_type=refresh_token`,
          //     {
          //       headers: {
          //         "Content-Type": "application/x-www-form-urlencoded",
          //         Authorization: `Basic ${stringToBase64(
          //           `${env.TWITTER_CLIENT_ID}:${env.TWITTER_CLIENT_SECRET}`
          //         )}`,
          //       },
          //     }
          //   )
          //   .catch(console.error);
          // console.log(response?.data);
          // const client = ctx.twitterClient(response?.data.access_token);
          // const tweet = await client.tweets
          //   .createTweet({
          //     text,
          //   })
          //   .catch((e) => {
          //     console.error(e);
          //   });
          // const response = await axios.post(
          //   "https://api.twitter.com/2/oauth2/token",
          //   null,
          //   {
          //     headers: {
          //       "Content-Type": "application/x-www-form-urlencoded",
          //       Authorization: `Basic ${stringToBase64(
          //         `${env.TWITTER_CLIENT_ID}:${env.TWITTER_CLIENT_SECRET}`
          //       )}`,
          //     },
          //     params: {
          //       refresh_token: account.refresh_token,
          //       grant_type: "refresh_token",
          //       client_id: env.TWITTER_CLIENT_ID,
          //     },
          //   }
          // );
          // console.log(response?.data, "response?.dasaaaaaaaata");
          // const client = new Twitter({
          //   bearer_token:
          //     "AAAAAAAAAAAAAAAAAAAAAFlhjQEAAAAAE3g9ZAL3RQfI45nRRIhIl0y9h1E%3D1e9dvHPseBboo4rHAqkRc5551EMbhtQkYuJxLoC0tprweA2BfZ",
          //   consumer_key: "CkpjvoELIUbuvjlLRPu9ZYWYf",
          //   consumer_secret:
          //     "TyFZvw40nVYlVsCkILrf139OBpb6zlGFL0IYDN5ww8vrl4yaZk",
          // });
          // client.post("statuses/update", { status: text }).catch(console.error);
          const client = ctx.twitterClient(account.access_token);
          const tweet = await client.tweets
            .createTweet({
              text,
            })
            .catch((e) => {
              console.error(e);
            });
          return tweet;
        } catch (e) {
          console.error(e);
        }
      }
    }),
  scheduleTweets: protectedProcedure
    .input(
      z.object({
        tweets: z.array(
          z.object({
            text: z.string(),
            scheduled_at: z.string(),
          })
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
