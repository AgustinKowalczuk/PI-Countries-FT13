const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('activity',{
        id:{ // Id de clave unica para la actividad
            type: DataTypes.UUID,
            allowNull:false,
            primaryKey: true,
        },
        name:{ // Nombre de la actividad
            type: DataTypes.STRING,
            allowNull: false,
        },
        Dificultad:{ // dificultad de la actividad
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false,
        },
        temporada:{ // Tipo de estacion del año
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull:false,
        },
    });
}