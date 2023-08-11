"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserTransactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  UserTransactions.init(
    {
      userId: DataTypes.INTEGER,
      invoiceId: DataTypes.STRING,
      orderDate: DataTypes.DATE,
      cartsId: DataTypes.STRING,
      totalAmount: DataTypes.DECIMAL,
      status: DataTypes.ENUM(["paid", "unpaid", "delivered", "canceled", "expired"]),
    },
    {
      sequelize,
      modelName: "UserTransactions",
    }
  );

  UserTransactions.associate = function (models) {
    UserTransactions.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return UserTransactions;
};
