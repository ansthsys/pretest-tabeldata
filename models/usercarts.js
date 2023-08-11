"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  UserCarts.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      checkouted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "UserCarts",
    }
  );

  UserCarts.associate = function (models) {
    UserCarts.belongsTo(models.Users, { foreignKey: "userId", as: "user" });
    UserCarts.belongsTo(models.Products, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return UserCarts;
};
