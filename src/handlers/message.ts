import { Message } from "discord.js";

export const messageHandler = async (message: Message) => {
  if (message.author.bot) return;

  if (message.content === "hello") {
    message.channel.send("Hello, world!");
  }
};
