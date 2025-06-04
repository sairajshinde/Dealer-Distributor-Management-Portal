

import { Router } from "express";
import {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} from "../controllers/inventoryController.js";
import { protect, authorize } from "../middlewares/auth.js";

/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Get all inventory items
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: List of inventory items
 */

/**
 * @swagger
 * /inventory:
 *   post:
 *     summary: Create a new inventory item
 *     tags: [Inventory]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, quantity, price]
 *             properties:
 *               name: { type: string , example: "Product" }
 *               quantity: { type: number, example: 100 }
 *               price: { type: number, example: 29.99 }
 *     responses:
 *       201:
 *         description: Item created
 */

/**
 * @swagger
 * /inventory/{id}:
 *   put:
 *     summary: Update inventory item by ID
 *     tags: [Inventory]
 *     security:
 *       - tokenAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity: { type: number , example: 150 }
 *               price: { type: number , example: 24.99 }
 *     responses:
 *       200:
 *         description: Item updated
 */

/**
 * @swagger
 * /inventory/{id}:
 *   delete:
 *     summary: Delete inventory item by ID
 *     tags: [Inventory]
 *     security:
 *       - tokenAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item deleted
 */

const router = Router();

router.use(protect, authorize("admin", "distributor"));

router.post("/", createItem);        
router.get("/", getItems);            
router.put("/:id", updateItem);       
router.delete("/:id", deleteItem);    

export default router;
