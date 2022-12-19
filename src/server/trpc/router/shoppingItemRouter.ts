import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const shoppingItemRouter = router({
  addItem: publicProcedure
    .input(z.object({
      name: z.string(),
    }))
    .mutation(async ({ input, ctx }) => {
      const { name } = input;

      return await ctx.prisma.shoppingItem.create({
        data: {
          name,
        },
      });
    })
});
