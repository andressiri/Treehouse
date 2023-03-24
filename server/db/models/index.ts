import { DataTypes, Sequelize } from "sequelize";
import {
  ItestConfig,
  IdevelopmentConfig,
  IproductionConfig,
} from "../../typings/database";
import { dbConfigs } from "../../config/db/configDB";
import modelsArray from "./modelsArray";

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

modelsArray.forEach((model) => {
  db[model.name] = model.model(sequelize, DataTypes);
  if (db[model.name].associate) db[model.name].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
