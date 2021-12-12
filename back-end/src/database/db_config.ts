import { Dialect, Sequelize } from "sequelize";

const dbName = "WEB_3" as string;
const dbHost = "localhost";
const dbUser = "postgres" as string;
const dbPassword = "123456";
const dbDialect = "postgres" as Dialect;
const dbPort = 5432 as number;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect,
});

export default sequelizeConnection;
