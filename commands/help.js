require("dotenv").config();

module.exports = {
  name: "help",
  description: "List of all the available commands",
  aliases: ["commands"],
  usage: "[command name]",
  cooldown: 5,
  execute(message, args) {
    const data = [];
    const { commands } = message.client;

    // list of commands DM
    if (!args.length) {
      data.push("Here's a list of all the commands:");
      data.push(commands.map((command) => command.name).join(", "));
      data.push(
        `\nYou can send \`${process.env.PREFIX}help [command name]\` to get info on a specific command!`
      );

      return message.author
        .send(data, { split: true })
        .then(() => {
          if (message.channel.type === "dm") return;
          //   message.reply("I've sent you a DM will all the commands!");
        })
        .catch((error) => {
          console.error(
            `Could not send help DM to ${message.author.tag}.\n`,
            error
          );
          message.reply("It seems I can't DM you! Do you have DMs disabled?");
        });
    }

    // information on specific command
    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply("that's not a valid command!");
    }

    data.push(`**Name:** ${command.name}`);

    if (command.aliases)
      data.push(`**Aliases:** ${command.aliases.join(", ")}`);
    if (command.description)
      data.push(`**Description:** ${command.description}`);
    if (command.usage)
      data.push(
        `**Usage:** ${process.env.PREFIX}${command.name} ${command.usage}`
      );

    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

    message.channel.send(data, { split: true });
  },
};
