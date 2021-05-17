"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ready_1 = require("./ready");
const consola_1 = __importDefault(require("consola"));
describe("readyHandler", () => {
    jest.spyOn(consola_1.default, "success");
    it("should log to console", () => {
        ready_1.readyHandler();
        expect(consola_1.default.success).toHaveBeenCalledTimes(1);
        expect(consola_1.default.success).toHaveBeenCalledWith("Discord bot has logged in!");
    });
});
//# sourceMappingURL=ready.test.js.map