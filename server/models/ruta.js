'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ruta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ruta.init({
    iniciolatitud: DataTypes.DECIMAL,
    iniciolongitud: DataTypes.DECIMAL,
    finlatitud: DataTypes.DECIMAL,
    finlongitud: DataTypes.DECIMAL,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ruta',
    //tableName: 'Ruta',
    timestamps: false // Desactivar la inclusión de createdAt y updatedAt
  });
  return Ruta;
};
