import fs from "fs";
import { Collection } from "discord.js";

type TCommand = {
  name: string;
  aliases: string;
  description: string;
  execute: Function;
};

let commands = new Collection<string, TCommand>();
const path = `${__dirname}/../../dist/commands`;

export const commandHandler = async () => {
  const commandFiles = fs
    .readdirSync(path)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = await import(`${path}/${file}`);
    commands.set(command.name, command);
  }

  return commands;
};
