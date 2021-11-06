"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_config_js_1 = __importDefault(require("./db_config.js"));
class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new sequelize_1.default.Sequelize(db_config_js_1.default);
    }
}
const database = new Database();
exports.default = database;
//# sourceMappingURL=index.js.map