import path from "path";
import dotenv from "dotenv";
import { Dialect } from "sequelize";
import { IdbConfigs } from "../../typings/database";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const dbConfigs: IdbConfigs = {
  development: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT) as number,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  test: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  production: {
    uri: process.env.DATABASE_URL as string,
    dialect: process.env.DB_DIALECT as Dialect,
    protocol: process.env.DB_DIALECT as string,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
