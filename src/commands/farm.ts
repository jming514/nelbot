import dotenv from "dotenv";
import { Message } from "discord.js";
import { connectedKnex } from "../db/knex";
dotenv.config();

interface farm {
  id: number;
  total: number;
}

export const name = "farm";
export const description = "kc farming dkmods";
export const execute = async (
  message: Message,
  _args: string[]
): Promise<Message | Message[]> => {
  const result = await connectedKnex<farm>("farm")
    .where("id", 1)
    .first()
    .catch((err) => console.log(err));

  if (!result) {
    return message.channel.send(
      "Uh oh... something went wrong... please contact Kamitsu"
    );
  }

  const newTotal = result.total + 1;

  await connectedKnex<farm>("farm")
    .update({ total: newTotal })
    .where("id", 1)
    .catch((err) => console.log(err));

  return message.channel.send(
    `+1 Another <:DKMods:${process.env.DKMods}> farmed by KC! That makes the total: ${newTotal} <:DKMods:${process.env.DKMods}>`
  );
};
