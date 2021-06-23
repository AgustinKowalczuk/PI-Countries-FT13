const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    id3Code: { // id de 3 letras, codigo unico
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {       // nombre del pais
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {     // continente
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {    // capital
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {  // Sub region
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {       // Area
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population: { // population / poblacion
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flag:{ // flag / bandera URL
      type:DataTypes.STRING,
      allowNull:false,
    },
  });
};
