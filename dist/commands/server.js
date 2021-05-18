"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.description = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = "server";
exports.description = "Information about the current server.";
const execute = (message, _args) => {
    var _a, _b;
    const serverEmbed = new discord_js_1.MessageEmbed()
        .setColor("#0099ff")
        .setTitle((_a = message.guild) === null || _a === void 0 ? void 0 : _a.name)
        .setDescription("Server for the homies")
        .addField("Total members", (_b = message.guild) === null || _b === void 0 ? void 0 : _b.memberCount, true);
    return message.channel.send(serverEmbed);
};
exports.execute = execute;
//# sourceMappingURL=server.js.map