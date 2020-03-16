"use strict";
module.exports = (sequelize, DataTypes) => {
  const passengers = sequelize.define(
    "passengers",
    {
      dewasa: DataTypes.STRING,
      tanda_pengenal: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      ticket_id: DataTypes.INTEGER
    },
    {}
  );
  passengers.associate = function(models) {
    // associations can be defined here
    passengers.belongsTo(models.ticket, {
      foreignKey: "ticket_id"
    });
    passengers.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };
  return passengers;
};
