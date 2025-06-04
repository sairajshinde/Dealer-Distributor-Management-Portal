

import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { orderNumber, items, totalAmount } = req.body;
    const userId = req.user.id;

    const order = await Order.create({
      orderNumber,
      userId,
      items,
      totalAmount,
    });
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating order" });
  }
};

export const listOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Order.update(req.body, { where: { id } });
    res.json({ message: "Order updated", updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating order" });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.update({ status: "cancelled" }, { where: { id } });
    res.json({ message: "Order cancelled" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error cancelling order" });
  }
};
