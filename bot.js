require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commands = args.shift().toLowerCase();

  if (message.content === "!server") {
    message.channel.send(
      `The server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  }
});

client.login(process.env.BOT_TOKEN);
