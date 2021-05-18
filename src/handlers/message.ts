import { Message } from "discord.js";
import dotenv from "dotenv";
import { commandHandler } from "./command";
import consola from "consola";
dotenv.config();

const commands = commandHandler();

export const messageHandler = async (message: Message) => {
  if (
    !message.content.startsWith(process.env.PREFIX as string) ||
    message.author.bot
  )
    return;

  const args: string[] = message.content
    .slice(process.env.PREFIX!.length)
    .trim()
    .split(/ +/);
  const commandName: string = args.shift()?.toLowerCase() as string;

  // FIXME: Change the any type
  const command =
    (await commands).get(commandName) ||
    (await commands).find((c): any => {
      c.aliases?.includes(commandName);
    });

  if (!command) return;
  // console.log("commandName:", commandName);
  // console.log("command:", command);

  try {
    command.execute(message, args);
  } catch (error) {
    consola.error(error);
    message.reply("There was an error trying to execute that command!");
  }
};
