const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//---------------------8<-------------------------
// This is the model for the ProductTag table

class ProductTag extends Model {}
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
