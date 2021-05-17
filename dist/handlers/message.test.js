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
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("./message");
describe("messageHandler", () => {
    const message = {
        author: {
            bot: true,
        },
        content: "hello",
        channel: {
            send: jest.fn(),
        },
    };
    it("should return if author of message is bot", () => __awaiter(void 0, void 0, void 0, function* () {
        yield message_1.messageHandler(message);
        expect(null);
    }));
    it("should send a message to the channel", () => __awaiter(void 0, void 0, void 0, function* () {
        message.author.bot = false;
        message.content = "hello";
        yield message_1.messageHandler(message);
        expect(message.channel.send).toHaveBeenCalledTimes(1);
        expect(message.channel.send).toBeCalledWith("Hello, world!");
    }));
});
//# sourceMappingURL=message.test.js.map