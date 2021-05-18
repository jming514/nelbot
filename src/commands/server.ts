import { Message, MessageEmbed } from "discord.js";

export const name = "server";
export const description = "Information about the current server.";
export const execute = (
  message: Message,
  _args: string[]
): Promise<Message | Message[]> => {
  const serverEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(message.guild?.name)
    .setDescription("Server for the homies")
    .addField("Total members", message.guild?.memberCount, true);
  return message.channel.send(serverEmbed);
};
