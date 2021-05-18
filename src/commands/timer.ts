import { Message } from "discord.js";

export const name = "timer";
export const description = "set a timer to get pinged after time has elapsed";
export const execute = async (
  message: Message,
  args: string[]
): Promise<void | Message> => {
  if (!args[0].match(/^[0-9]*$/))
    return message.channel.send("Please enter a valid number.");

  if (!args[1]) {
    return message.channel.send("Please include a message.");
  }

  let duration: number = parseInt(args[0].replace(/\D/g, ""));

  if (duration > 60 || duration < 1)
    return message.channel.send("Please enter a number between 1 and 60.");

  duration = duration * 1000;

  const msg = `${message.member} ${args.slice(1).join(" ")}`;

  setTimeout(() => message.channel.send(msg), duration);
};
