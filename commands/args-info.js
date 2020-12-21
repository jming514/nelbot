module.exports = {
  name: "args-info",
  description: "Information about the arguments provided.",
  args: true,
  execute(message, args) {
    message.channel.send(
      `**Argument(s)**: ${args}\n**Arguments length**: ${args.length}`
    );
  },
};
