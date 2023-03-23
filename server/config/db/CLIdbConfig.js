// This file is required to create/delete db with Sequelize CLI
const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv"); // eslint-disable-line @typescript-eslint/no-var-requires

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const dbConfigs = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    uri: process.env.DATABASE_URL,
    dialect: process.env.DB_DIALECT,
    protocol: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

module.exports = dbConfigs;
