import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const associateSiblingsMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.addColumn("Siblings", "siblingIdA", {
        type: DataTypes.INTEGER,
        references: {
          model: "Students",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });

      await queryInterface.addColumn("Siblings", "siblingIdB", {
        type: DataTypes.INTEGER,
        references: {
          model: "Students",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.removeColumn("Siblings", "siblingIdA");
      await queryInterface.removeColumn("Siblings", "siblingIdB");
    });
  },
};

export default associateSiblingsMigration;
