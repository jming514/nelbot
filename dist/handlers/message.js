"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHandler = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const command_1 = require("./command");
const consola_1 = __importDefault(require("consola"));
dotenv_1.default.config();
const commands = command_1.commandHandler();
const messageHandler = (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!message.content.startsWith(process.env.PREFIX) ||
        message.author.bot) {
        return;
    }
    const args = message.content
        .slice(process.env.PREFIX.length)
        .trim()
        .split(/ +/);
    const commandName = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const command = (yield commands).get(commandName) ||
        (yield commands).find((c) => {
            var _a;
            (_a = c.aliases) === null || _a === void 0 ? void 0 : _a.includes(commandName);
        });
    if (!command)
        return;
    try {
        command.execute(message, args);
    }
    catch (error) {
        consola_1.default.error(error);
        message.reply("There was an error trying to execute that command!");
    }
});
exports.messageHandler = messageHandler;
//# sourceMappingURL=message.js.map