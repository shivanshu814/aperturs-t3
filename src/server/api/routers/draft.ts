import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const draftRouter = createTRPCRouter({
  // create: publicProcedure
  //   .input(z.object({ post: z.string(), userId: z.string() }))
  //   .mutation(async ({ input: { post, userId }, ctx }) => {
  //     const draft = await ctx.prisma.draft.create({
  //       data: {
  //         userId,
  //         post,
  //       },
  //     });
  //     return draft;
  //   }),

  // getAll: publicProcedure
  //   .input(z.object({ userId: z.string() }))
  //   .query(({ ctx, input: { userId } }) => {
  //     return ctx.prisma.draft.findMany({
  //       where: {
  //         userId,
  //       },
  //     });
  //   }),
});
