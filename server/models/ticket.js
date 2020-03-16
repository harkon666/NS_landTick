"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      nameTrain: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      dateStart: DataTypes.STRING,
      startStation: DataTypes.INTEGER,
      startTime: DataTypes.STRING,
      destinationStation: DataTypes.INTEGER,
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

    ticket.belongsTo(models.station, {
      foreignKey: "startStation",
      as: "start"
    });

    ticket.belongsTo(models.station, {
      foreignKey: "destinationStation",
      as: "end"
    });
  };
  return ticket;
};
