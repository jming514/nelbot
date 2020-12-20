const Discord = require("discord.js");

module.exports = {
  name: "motd",
  description: "Set the message of the day",
  execute(message, args) {
    const motd = args.join(" ");

    console.log("The motd is:", motd);

    message.channel.send(`**Message of the Day**\n${motd}`);
  },
};
