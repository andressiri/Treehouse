// This file is required for Sequelize CLI to function properly
const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv"); // eslint-disable-line @typescript-eslint/no-var-requires

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  production: {
    uri: process.env.DATABASE_URL,
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
