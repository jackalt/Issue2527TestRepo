from redbot.core import commands


class DisabledCog(commands.Cog):
    @commands.command()
    async def comfromdisabledcog(self, ctx):
        await ctx.send("hello")


def setup(bot):
    bot.add_cog(DisabledCog())
