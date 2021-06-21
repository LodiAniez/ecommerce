"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Methods {
    constructor() { }
    generateAccessToken(data) {
        const generate = jsonwebtoken_1.default.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 });
        return generate;
    }
}
exports.default = Methods;
