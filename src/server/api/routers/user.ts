import { z } from "zod";
import bcrypt from "bcrypt";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
export const userRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input: { email, password } }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
        const user = await ctx.prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        });
        return user;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code == "P2002") {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Email already exists",
            });
          }
        }
      }
    }),
});
