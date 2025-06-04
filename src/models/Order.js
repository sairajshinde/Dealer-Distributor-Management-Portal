import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Order = sequelize.define("Order", {
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "approved", "shipped", "delivered", "cancelled"),
    defaultValue: "pending",
  },
  items: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Order;