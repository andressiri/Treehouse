import path from "path";
import fs from "fs";
import { DataTypes, Sequelize } from "sequelize";
import {
  ItestConfig,
  IdevelopmentConfig,
  IproductionConfig,
} from "../../typings/database";
import { dbConfigs } from "../../config/db/configDB";

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || "development";
const config = dbConfigs[env as keyof typeof dbConfigs];
const db: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any

let sequelize: Sequelize;
if ((config as IproductionConfig).uri) {
  sequelize = new Sequelize(
    (config as IproductionConfig).uri,
    config as IproductionConfig
  );
} else {
  sequelize = new Sequelize(
    (config as IdevelopmentConfig | ItestConfig).database,
    (config as IdevelopmentConfig | ItestConfig).username,
    (config as IdevelopmentConfig | ItestConfig).password,
    config as IdevelopmentConfig | ItestConfig
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const filePath = path.join(__dirname, file);
    import(path.join(filePath)).then((mod) => {
      const model = mod.default(sequelize, DataTypes);
      db[model.name] = model;
    });
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
