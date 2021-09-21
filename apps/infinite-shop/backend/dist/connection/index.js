"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../keys"));
const dbName = "Products";
const conn = `mongodb+srv://crispen:${keys_1.default}@cluster0.max21.mongodb.net/${dbName}?retryWrites=true&w=majority`;
exports.default = conn;
//# sourceMappingURL=index.js.map