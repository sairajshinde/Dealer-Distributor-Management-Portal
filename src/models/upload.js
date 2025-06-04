import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Document = sequelize.define("Document", {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileType: {
    type: DataTypes.STRING,
  },
  uploadedBy: {
    type: DataTypes.STRING, 
  }
}, {
  timestamps: true,
});

export default Document;
