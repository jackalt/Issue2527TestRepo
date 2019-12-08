from .blah.cog import DisabledCog


def setup(bot):
    bot.add_cog(DisabledCog())
