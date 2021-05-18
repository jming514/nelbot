import { commandHandler } from "./command";

describe("commandHandler", () => {
  it("should return a Discord Collection", async () => {
    const response = await commandHandler();
    expect(response.size).toBeGreaterThan(0);
  });
});
