

import Inventory from "../models/Inventory.js";

export const createItem = async (req, res) => {
  try {
    const item = await Inventory.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating inventory item" });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Inventory.findAll();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching inventory" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Inventory.update(req.body, { where: { id } });
    res.json({ message: "Item updated", updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating item" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Inventory.destroy({ where: { id } });
    res.json({ message: "Item deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting item" });
  }
};
