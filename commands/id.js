module.exports = {
  name: "id",
  description: "Command used for getting the id",
  usage: "<emoji name>",
  execute(message, args, client) {
    const emojiCache = client.emojis.cache;

    console.log(message.content);

    emojiCache.forEach((e) => {
      if (e.name.toLowerCase() === args.join("").toLowerCase()) {
        message.channel.send(`Emoji ID: ${e.id}`);
      }
    });
  },
};
