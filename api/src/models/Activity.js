const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('activity',{
        id_a:{ // Id de clave unica para la actividad
            type: DataTypes.UUID,
            allowNull:false,
            primaryKey: true,
        },
        name_a:{ // Nombre de la actividad
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season:{ // Tipo de estacion del año
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull:true,
        },
    });
}