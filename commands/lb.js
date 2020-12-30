module.exports = {
  name: "lb",
  description: "Server leaderboard",
  async execute(message, args) {
    const sentMessage = await message.channel.send(
      `**lb test**\n${message.guild.icon}\n${message.guild.cache}`
    );
    sentMessage.react("😀");
  },
};
