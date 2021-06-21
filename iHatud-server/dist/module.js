"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModule = void 0;
const login_1 = __importDefault(require("./routes/auth/login"));
class RouteModule {
    constructor(data) {
        this.data = data;
        this.app = this.data.app;
        this.app.use("/auth", login_1.default);
    }
}
exports.RouteModule = RouteModule;
