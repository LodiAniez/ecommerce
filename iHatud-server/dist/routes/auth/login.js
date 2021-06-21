"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const methods_1 = __importDefault(require("../../methods/methods"));
const router = express_1.default.Router();
const methods = new methods_1.default();
router.get('/login', (req, res) => {
    const accessToken = methods.generateAccessToken({ username: "test", password: "test" });
    res.status(200).send(accessToken);
});
exports.default = router;
