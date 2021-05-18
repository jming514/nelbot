import { Message } from "discord.js";
import { messageHandler } from "../../handlers/message";

describe("command: server", () => {
  const message: Message = {
    guild: {
      name: "ServName",
      memberCount: 52,
    },
    author: { bot: false },
    content: "!server",
    channel: { send: jest.fn() },
  } as unknown as Message;

  it("should return server data", async () => {
    await messageHandler(message);
    expect(message.channel.send).toHaveBeenCalledTimes(1);
  });
});
