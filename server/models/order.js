"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      ticket_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      status: DataTypes.STRING,
      attachment: DataTypes.STRING,
      paid: DataTypes.BOOLEAN
    },
    {}
  );
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.ticket, {
      foreignKey: "ticket_id"
    });

    order.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };
  return order;
};
