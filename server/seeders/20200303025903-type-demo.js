"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "types",
      [
        {
          name: "Ekonomi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eksekutif",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bisnin",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
