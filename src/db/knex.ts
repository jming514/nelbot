import knex from "knex";

export const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "./src/db/db.sqlite3",
  },
  useNullAsDefault: true,
});
