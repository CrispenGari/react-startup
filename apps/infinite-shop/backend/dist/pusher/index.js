"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pusher_1 = __importDefault(require("pusher"));
const instance = new pusher_1.default({
    appId: "1198171",
    key: "e205b2694afdb83691c4",
    secret: "fe10256cc31f9c4b84ad",
    cluster: "ap2",
    useTLS: true,
});
exports.default = instance;
//# sourceMappingURL=index.js.map