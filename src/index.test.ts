import client from "../src/client";
import main from "../src/index";

jest.mock("../src/client", () => ({
  login: jest.fn(),
  on: jest.fn(),
}));

describe("client", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should call client.login", async () => {
    await main();
    expect(client.login).toHaveBeenCalledTimes(1);
  });

  it("should call client.on 2 times", async () => {
    await main();
    expect(client.on).toHaveBeenCalledTimes(2);
  });
});
