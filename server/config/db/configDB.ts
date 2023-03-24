import path from "path";
import dotenv from "dotenv";
import { IdbConfigs } from "../../typings/database";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const dbConfigs: IdbConfigs = {
  development: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT) as number,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    dialect: "postgres",
  },
  production: {
    uri: process.env.DATABASE_URL as string,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
