import User from "../models/User.js";

export const getPendingUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { status: "pending" },
      attributes: { exclude: ["password"] },
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const approveUser = async (req, res) => {
  console.log("Approving user...");
  try {
    const { email } = req.params;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.status = "approved";
    await user.save();

    res.json({ message: "User approved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    await User.destroy({ where: { email } });
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};