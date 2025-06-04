import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Inventory = sequelize.define("Inventory", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Inventory;
