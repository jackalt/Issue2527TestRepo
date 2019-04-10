from .testcog import TestCog


async def setup(bot):
    cog = TestCog(bot)
    await cog.initialize()
    bot.add_cog(cog)
