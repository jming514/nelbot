import { Message } from "discord.js";
import { messageHandler } from "./message";

describe("messageHandler", () => {
  const message: Message = {
    author: {
      bot: true,
    },
    content: "hello",
    channel: {
      send: jest.fn(),
    },
  } as unknown as Message;

  it("should return if author of message is bot", async () => {
    await messageHandler(message);
    expect(null);
  });

  it("should send a message to the channel", async () => {
    message.author.bot = false;
    message.content = "hello";

    await messageHandler(message);
    expect(message.channel.send).toHaveBeenCalledTimes(1);
    expect(message.channel.send).toBeCalledWith("Hello, world!");
  });
});
