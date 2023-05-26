import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  User,
} from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { Role } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user, account, profile, isNewUser }) {
      if (!isNewUser) {
        console.log({ isNewUser });
      }
      if (account) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
        token.expires = account.expires;
      }
      console.log("jwt", token);
      console.log({ user });
      console.log({ account });
      console.log({ isNewUser });
      return token;
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.role = user.role;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      type: "credentials",

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("No credentials found");
        }
        console.log("credentials", credentials);
        const account = await prisma.user.findUnique({
          where: { email: credentials.email },
          select: {
            id: true,
            email: true,
            role: true,
            password: true,
          },
        });

        if (!account) {
          throw new Error("No account found");
        }
        if (!account.password) {
          throw new Error("No password found");
        }
        const valid = bcrypt.compareSync(
          credentials?.password,
          account.password
        );

        if (!valid) {
          throw new Error("Invalid password");
        }
        const { password, ...user } = account;
        return user as User;
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
      version: "2.0",
      authorization: {
        url: "https://twitter.com/i/oauth2/authorize",
        params: {
          scope:
            "users.read tweet.write tweet.moderate.write bookmark.read bookmark.write tweet.read offline.access like.read list.read",
        },
      },
      token: {
        url: "https://api.twitter.com/2/oauth2/token",
      },
      allowDangerousEmailAccountLinking: true,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
