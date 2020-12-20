module.exports = {
  name: "poll",
  description: "Create a YES / NO poll",
  usage: "<Poll question>",
  async execute(message, args, client) {
    const YES = "429016777889153029"; // Drake2
    const NO = "429095438931460136"; // Drake1

    await message.react(YES);
    await message.react(NO);
  },
};
