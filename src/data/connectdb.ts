import { Sequelize } from "sequelize";
import Operation from "../entity/Operation";
const dbName = 'sewing-factory'
const dbUser = 'postgres'
const dbPassword = 'postgres'
const dbHost = 'localhost'
const dbDriver = 'postgres'

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db.operation = Operation
export {db};