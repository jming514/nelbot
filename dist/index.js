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
const dotenv_1 = __importDefault(require("dotenv"));
const ready_1 = require("./handlers/ready");
const message_1 = require("./handlers/message");
const client_1 = __importDefault(require("./client"));
dotenv_1.default.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    client_1.default.login(process.env.BOT_TOKEN);
    client_1.default.on("ready", ready_1.readyHandler);
    client_1.default.on("message", message_1.messageHandler);
});
main();
exports.default = main;
//# sourceMappingURL=index.js.map