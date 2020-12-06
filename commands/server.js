module.exports = {
  name: "server",
  description: "Information about the current server.",
  execute(message, args) {
    message.channel.send(
      `The server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  },
};
