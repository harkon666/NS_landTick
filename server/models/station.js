"use strict";
module.exports = (sequelize, DataTypes) => {
  const station = sequelize.define(
    "station",
    {
      location: DataTypes.STRING,
      station: DataTypes.STRING,
      code: DataTypes.STRING
    },
    {}
  );
  station.associate = function(models) {
    // associations can be defined here
  };
  return station;
};
