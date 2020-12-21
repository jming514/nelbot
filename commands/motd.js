const Discord = require("discord.js");

module.exports = {
  name: "motd",
  description: "Set the message of the day",
  usage: "<message>",
  execute(message, args) {
    const motd = args.join(" ");

    message.channel.send(`**Message of the Day**\n${motd}`);
  },
};
