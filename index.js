require("dotenv").config();

const fs = require("fs");
const Discord = require("discord.js");
const prefix = "!";

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  // check if message starts with "!" or if author is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (err) {
    console.error(err);
    message.reply("There was an error trying to execute that command!");
  }

  // switch (command) {
  //   case "ping":
  //     client.commands.get("ping").execute(message, args);
  //     break;
  //   case "prune":
  //     client.commands.get("prune").execute(message, args);
  //     break;
  //   case "server":
  //     client.commands.get("server").execute(message, args);
  //     break;
  // }
});

client.login(process.env.BOT_TOKEN);
