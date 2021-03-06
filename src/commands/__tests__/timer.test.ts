import { Message } from "discord.js";
import { messageHandler } from "../../handlers/message";

jest.useFakeTimers("modern");

describe("command: timer", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  const message: Message = {
    content: "!timer 1 hello",
    author: {
      bot: false,
    },
    channel: {
      send: jest.fn(),
    },
  } as unknown as Message;

  it("should send a message after elapsed time", async () => {
    await messageHandler(message);

    expect(message.channel.send).toHaveBeenCalledWith("Timer set!");
    jest.runAllTimers();
    expect(message.channel.send).toBeCalledTimes(2);
  });

  it("should ask for a valid number", async () => {
    message.content = "!timer 2r";
    await messageHandler(message);
    expect(message.channel.send).toHaveBeenCalledTimes(1);
    expect(message.channel.send).toHaveBeenCalledWith(
      "Please enter a valid number."
    );
  });

  it("should ask for a message", async () => {
    message.content = "!timer 2";
    await messageHandler(message);
    expect(message.channel.send).toHaveBeenCalledWith(
      "Please include a message."
    );
  });
});
