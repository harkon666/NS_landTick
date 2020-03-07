"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      nameTrain: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      dateStart: DataTypes.STRING,
      startStation: DataTypes.STRING,
      startTimer: DataTypes.STRING,
      destinationStation: DataTypes.STRING,
      arrivalTime: DataTypes.STRING,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  ticket.associate = function(models) {
    // associations can be defined here
    ticket.belongsTo(models.type, {
      foreignKey: "type_id"
    });
  };
  return ticket;
};
