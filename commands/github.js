module.exports = {
  name: "github",
  description: "github repo for bot",
  aliases: ["gh"],
  execute(message, args) {
    message.channel.send(
      `You can find my source code at https://github.com/jming514/nelbot`
    );
  },
};
