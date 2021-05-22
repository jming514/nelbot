import { Collection, Message } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export const name = "prune";
export const description = "delete up to 99 messages";
export const execute = async (
  message: Message,
  args: string[]
): Promise<void | Message> => {
  if (message.author.id === (process.env.ADMIN_ID as string)) {
    const amount: number = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("That doesn't seem to be a valid number!");
    } else if (amount <= 1 || amount > 99) {
      return message.reply("You can only reply between 1 and 98");
    }

    await message.channel.messages
      .fetch({ limit: amount })
      .then((messages: Collection<string, Message>) => {
        if (message.channel.type === "text") {
          message.channel.bulkDelete(messages, true);
        }
      });
  }
};
