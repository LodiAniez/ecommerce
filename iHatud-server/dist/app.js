"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Libraries */
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
/** Middlewares */
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const module_1 = require("./module");
/** Utilities */
const enums_1 = __importDefault(require("./utils/enums"));
const app = express_1.default();
const port = process.env.NODE_ENV === enums_1.default.Development
    ? process.env.DEV_PORT
    : process.env.PROD_PORT;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
/** Route modules */
new module_1.RouteModule({ app });
app.listen(port, () => console.log(`Listening on port ${port}`));
