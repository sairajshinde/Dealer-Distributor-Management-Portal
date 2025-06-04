

import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ message: "Email taken" });

    await User.create({ name, email, password, role });
    res.status(201).json({ message: "Signup successful, pending approval" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    if (user.status !== "approved")
      return res.status(403).json({ message: "Awaiting approval" });

    const token = generateToken(user.id);
    res.json({
      token,
      user: { id: user.id, name: user.name, role: user.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
