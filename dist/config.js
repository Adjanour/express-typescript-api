"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.ENV_TYPE = exports.DEV_CONN_STRX = exports.CONN_STRX = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONN_STRX = process.env.CONN_STRX;
exports.DEV_CONN_STRX = process.env.DEV_CONN_STRX;
exports.ENV_TYPE = "Development";
exports.PORT = process.env.PORT || 3000;
