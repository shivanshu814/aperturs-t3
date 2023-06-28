import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        clerkId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.upsert({
        where: { clerkUserId: input.clerkId},
        create: {
          clerkUserId:  input.clerkId
          // Set other fields from evt.data if needed
        },
        update: {
          // Update other fields from evt.data if needed
        },
      });
      return user;
    }),
});
