import { Router } from "express";
import { signup, login } from "../controllers/authController.js";

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password, role]
 *             properties:
 *               name: { type: string , example: "John Doe" }
 *               email: { type: string , example: "John@sample.com"}
 *               password: { type: string , example: "password123" }
 *               role: { type: string, enum: [admin,dealer, distributor], example: "admin" }
 *     responses:
 *       200:
 *         description: Signup successful, pending approval
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login with email and password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string ,example: "John@sample.com"}
 *               password: { type: string ,example: "password123" }
 *     responses:
 *       200:
 *         description: Login successful
 */

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

export default authRouter;