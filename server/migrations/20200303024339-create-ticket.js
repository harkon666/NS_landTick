"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameTrain: {
        type: Sequelize.STRING
      },
      type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "types",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      dateStart: {
        type: Sequelize.STRING
      },
      startStation: {
        type: Sequelize.STRING
      },
      startTimer: {
        type: Sequelize.STRING
      },
      destinationStation: {
        type: Sequelize.STRING
      },
      arrivalTime: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tickets");
  }
};
