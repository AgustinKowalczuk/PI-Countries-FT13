const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{ //alpha3Code / codigo de 3 letras *
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull:false,
    },
    name: { //name / nombre   *
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{ //region / continente *
      type: DataTypes.TEXT,
      allowNull:false,
    },
    capital:{ //capital / capital *
      type: DataTypes.STRING,
      allowNull:false,
    },
    subregion:{ //subregion / sub-región 
      type: DataTypes.STRING,
    },
    flag:{ // flag / bandera
      type:DataTypes.STRING,
    }
  });
};
