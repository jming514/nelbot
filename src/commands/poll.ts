import { Message } from "discord.js";

export const name = "poll";
export const description = "Create a YES / NO poll";
export const execute = async (
  message: Message,
  _args: string[]
): Promise<void> => {
  // TODO: Make these environment variables instead?
  const YES = "429016777889153029"; // Drake2
  const NO = "429095438931460136"; // Drake1

  await message.react(YES);
  await message.react(NO);
};
