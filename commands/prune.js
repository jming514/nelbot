module.exports = {
  name: "prune",
  description: "delete up to 99 messages",
  usage: "<number of messages>",
  execute(message, args) {
    if (message.author.id === "99748382309879808") {
      const amount = parseInt(args[0]) + 1;

      if (isNaN(amount)) {
        return message.reply("That doesn't seem to be a valid number!");
      } else if (amount <= 1 || amount > 99) {
        return message.reply("You must input a number between 1 and 98");
      }

      // message.channel.bulkDelete(amount, true);
      message.channel.messages
        .fetch({ limit: amount })
        .then((messages) => {
          message.channel.bulkDelete(messages, true);
        })
        .catch((err) => console.log(err));
    }
  },
};
