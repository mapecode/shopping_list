import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const shoppingItemRouter = router({
  addItem: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { name } = input;

      return await ctx.prisma.shoppingItem.create({
        data: {
          name,
        },
      });
    }),
  getAllItems: publicProcedure.query(({ ctx }) =>
    ctx.prisma.shoppingItem.findMany()
  ),
  deleteItem: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id } = input;

      return await ctx.prisma.shoppingItem.delete({
        where: {
          id,
        },
      });
    }),
    toggleChecked: publicProcedure
    .input(z.object({
      id: z.string(),
      checked: z.boolean(),
    }))
    .mutation(async ({ input, ctx }) => {
      const { id, checked } = input;

      return await ctx.prisma.shoppingItem.update({
        where: {
          id
        },
        data: {
          checked,
        },
      });
    }),
});
