import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { sequelize } from "../config/db.js";

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM("admin", "dealer", "distributor"),
    defaultValue: "dealer",
  },
  status: {
    type: DataTypes.ENUM("pending", "approved"),
    defaultValue: "pending",
  },
}, {
  timestamps: true,
});

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.prototype.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default User;