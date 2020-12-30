module.exports = {
  name: "server",
  description: "Information about the current server.",
  execute(message, args) {
    const serverEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Hero Association")
      .setDescription("Server for the homies")
      .addField("Total members", message.guild.memberCount, true);

    message.channel.send(serverEmbed);
  },
};
