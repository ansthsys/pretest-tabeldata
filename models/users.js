"use strict";
const bcrypt = require("bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Users",
      hooks: {
        beforeCreate: (user, options) => {
          const hashedPassword = bcrypt.hashSync(user.password, 8);
          user.password = hashedPassword;
        },
      },
    }
  );

  Users.associate = function (models) {
    Users.hasMany(models.UserCarts);
    Users.hasMany(models.UserTransactions);
  };

  return Users;
};
