require("dotenv").config();

const fs = require("fs");
const Discord = require("discord.js");

const PREFIX = "!";
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once("ready", () => {
  // client.user.setActivity("white noise", { type: 2 });
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  // check if message starts with "!" or if author is a bot
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  // find command name/alias
  const command =
    client.commands.get(commandName) ||
    client.commands.find((c) => c.aliases && c.aliases.includes(commandName));

  if (!command) return;

  // check if any arguments are provided
  if (command.args && !args.length) {
    return message.channel.send(
      `You didn't provide any arguments, ${message.author}`
    );
  }

  // cooldown for commands
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${command.name}\` command`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  // execute command
  try {
    command.execute(message, args, client);
  } catch (err) {
    console.error(err);
    message.reply("There was an error trying to execute that command!");
  }
});

client.login(process.env.BOT_TOKEN);
