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
const client_1 = __importDefault(require("../src/client"));
const index_1 = __importDefault(require("../src/index"));
jest.mock("../src/client", () => ({
    login: jest.fn(),
    on: jest.fn(),
}));
describe("client", () => {
    beforeEach(() => jest.clearAllMocks());
    it("should call client.login", () => __awaiter(void 0, void 0, void 0, function* () {
        yield index_1.default();
        expect(client_1.default.login).toHaveBeenCalledTimes(1);
    }));
    it("should call client.on 2 times", () => __awaiter(void 0, void 0, void 0, function* () {
        yield index_1.default();
        expect(client_1.default.on).toHaveBeenCalledTimes(2);
    }));
});
//# sourceMappingURL=index.test.js.map