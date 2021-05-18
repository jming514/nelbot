import { Message } from "discord.js";
import { messageHandler } from "../../handlers/message";

describe("command: poll", () => {
  const message: Message = {
    author: { bot: false },
    content: "!poll does this test work?",
    react: jest.fn(),
  } as unknown as Message;

  it("should react twice to the message", async () => {
    await messageHandler(message);
    expect(message.react).toHaveBeenCalledTimes(2);
  });
});
