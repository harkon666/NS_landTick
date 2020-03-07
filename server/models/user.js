"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
