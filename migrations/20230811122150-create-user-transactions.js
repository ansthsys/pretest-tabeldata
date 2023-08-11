"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserTransactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      invoiceId: {
        type: Sequelize.STRING,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      cartsId: {
        type: Sequelize.STRING,
        get() {
          return this.getDataValue("cartsId").split(";");
        },
        set(value) {
          this.setDataValue("cartsId", value.join(";"));
        },
      },
      totalAmount: {
        type: Sequelize.DECIMAL,
      },
      status: {
        type: Sequelize.ENUM,
        values: ["paid", "unpaid", "delivered", "canceled", "expired"],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserTransactions");
  },
};
