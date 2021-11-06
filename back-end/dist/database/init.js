"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./models/User"));
const dbInit = () => {
    User_1.default.sync({ force: true });
};
exports.default = dbInit;
//# sourceMappingURL=init.js.map