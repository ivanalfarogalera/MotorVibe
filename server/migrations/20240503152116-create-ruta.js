'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ruta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iniciolatitud: {
        type: Sequelize.DECIMAL
      },
      iniciolongitud: {
        type: Sequelize.DECIMAL
      },
      finlatitud: {
        type: Sequelize.DECIMAL
      },
      finlongitud: {
        type: Sequelize.DECIMAL
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ruta');
  }
};