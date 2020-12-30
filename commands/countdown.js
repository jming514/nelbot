module.exports = {
  name: "countdown",
  description: "Set a timer to get pinged after selected time has elapsed.",
  aliases: ["cd"],
  usage: "<duration> <message>",
  execute(message, args) {
    // check if first character is a number
    if (!args[0].match(/^\d/)) {
      return message.channel.send("please enter a valid time");
    }

    let duration = parseInt(args[0].replace(/\D/g, ""));
    const msg = `${args[0]} have passed! ${message.member}\n> ${args
      .slice(1)
      .join(" ")}`;

    // check if seconds, minutes, or hours
    if (args[0].includes("s") && duration < 600) {
      duration = duration * 1000;
    } else if (args[0].includes("m")) {
      duration = duration * 60000;
    } else {
      return message.channel.send(
        "The time you selected is invalid, please check again."
      );
    }

    setTimeout(() => message.channel.send(msg), duration);
  },
};
