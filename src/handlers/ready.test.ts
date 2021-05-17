import { readyHandler } from "./ready";
import consola from "consola";

describe("readyHandler", () => {
  jest.spyOn(consola, "success");

  it("should log to console", () => {
    readyHandler();
    expect(consola.success).toHaveBeenCalledTimes(1);
    expect(consola.success).toHaveBeenCalledWith("Discord bot has logged in!");
  });
});
