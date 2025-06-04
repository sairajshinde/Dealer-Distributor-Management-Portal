import { Router } from "express";
import {
  createOrder,
  listOrders,
  updateOrder,
  cancelOrder,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/auth.js";

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [productId, quantity]
 *             properties:
 *               productId: { type: string , example: "12345" }
 *               quantity: { type: number, example: 100 }
 *     responses:
 *       201:
 *         description: Order placed
 */

/**
 * @swagger
 * /orders/{id}/cancel:
 *   put:
 *     summary: Cancel an order
 *     tags: [Orders]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Order cancelled
 */


const router = Router();

router.use(protect);

router.post("/", createOrder);            
router.get("/", listOrders);               
router.put("/:id", updateOrder);           
router.patch("/:id/cancel", cancelOrder);  

export default router;
