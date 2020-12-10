module.exports = {
  name: "poll",
  description: "Create a poll with two options to choose from",
  execute(message, args) {
    const question = [];

    for (let i = 0; i < args.length; i++) {
      // create the question string, option 1, and option 2
      if (args[i].includes("?")) {
        question.push(args[i].substring(0, args.length - 1));
        return;
      }

      question.push(args[i]);
    }
    console.log(question);
  },
};
