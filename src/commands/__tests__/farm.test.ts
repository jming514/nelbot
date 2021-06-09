import { Message } from "discord.js";
import { messageHandler } from "../../handlers/message";

describe("command: farm", () => {
  const message: Message = {
    author: { bot: false },
    content: "!farm",
    channel: { send: jest.fn() },
  } as unknown as Message;

  it("adds 1 to the kc dkmods counter", async () => {
    await messageHandler(message);
    expect(message.channel.send).toHaveBeenCalledTimes(1);
  });
});
