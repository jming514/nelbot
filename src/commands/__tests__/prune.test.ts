import { Message } from "discord.js";
import { messageHandler } from "../../handlers/message";
import dotenv from "dotenv";
dotenv.config();

describe("command: prune", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  const message: Message = {
    author: { bot: false, id: `${process.env.ADMIN_ID}` },
    content: "!prune 3",
    channel: {
      type: "text",
      bulkDelete: jest.fn(),
      send: jest.fn(),
    },
    reply: jest.fn(),
  } as unknown as Message;

  it("should bulkDelete", () => {
    expect(message.channel.type).toEqual("text");
    // FIXME: Test if bulkDelete is triggered
    // expect(message.channel.bulkDelete);
  });

  it("should reply due to wrong input", async () => {
    message.content = "!prune w";
    await messageHandler(message);
    expect(message.reply).toHaveBeenCalledTimes(1);
  });

  it("should reply because outside number range", async () => {
    message.content = "!prune 100";
    await messageHandler(message);
    expect(message.reply).toHaveBeenCalledTimes(1);
  });
});
