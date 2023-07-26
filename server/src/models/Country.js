const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull: false,
      validate: {
        len: {
          args: [3, 3], 
          msg: 'The ID must contain exactly 3 letters',
        },
        isAlpha: {
          msg: 'The ID must contain only letters.',
        },
      }  
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImage: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    coatOfArms:{
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    subregion: {
      type: DataTypes.STRING,
     
    },
    area: {type: DataTypes.FLOAT,
      
    },
    population: {type: DataTypes.INTEGER,
      allowNull:false,
    },
  },{
    timestamps: false
  });
};
