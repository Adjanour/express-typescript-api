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
exports.getDB = exports.connectDB = void 0;
const mongodb_1 = require("mongodb");
const config_js_1 = require("./config.js");
if (config_js_1.DEV_CONN_STRX == undefined || config_js_1.CONN_STRX == undefined) {
    throw new Error("Connection string is not defined");
}
const uri = config_js_1.ENV_TYPE == "Development" ? config_js_1.DEV_CONN_STRX : config_js_1.CONN_STRX;
const client = new mongodb_1.MongoClient(uri);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
    }
    catch (err) {
        console.error(err.message);
        throw (err);
    }
});
exports.connectDB = connectDB;
const getDB = (dbName) => {
    return client.db(dbName);
};
exports.getDB = getDB;
