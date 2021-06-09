import dotenv from "dotenv";
import { Message } from "discord.js";
dotenv.config();

export const name = "poll";
export const description = "Create a YES / NO poll";
export const execute = async (
  message: Message,
  _args: string[]
): Promise<void> => {
  // TODO: Make these environment variables instead?
  const YES = process.env.DRAKE2; // Drake2
  const NO = process.env.DRAKE1; // Drake1

  await message.react(YES);
  await message.react(NO);
};
