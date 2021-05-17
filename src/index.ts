import dotenv from "dotenv";
import { readyHandler } from "./handlers/ready";
import { messageHandler } from "./handlers/message";
import client from "./client";
dotenv.config();

const main = async () => {
  client.login(process.env.BOT_TOKEN);

  client.on("ready", readyHandler);
  client.on("message", messageHandler);
};

main();

export default main;
