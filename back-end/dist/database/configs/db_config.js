"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = "Web_3";
const dbHost = "localhost";
const dbUser = "postgres";
const dbPassword = "123456";
const dbDialect = "postgres";
const dbPort = 5432;
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect,
});
exports.default = sequelizeConnection;
//# sourceMappingURL=db_config.js.map