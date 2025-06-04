import { Router } from "express";
import {
  getPendingUsers,
  approveUser,
  deleteUser,
} from "../controllers/userController.js";
import { protect, authorize } from "../middlewares/auth.js";

const userRouter = Router();

/**
 * @swagger
 * /users/pending:
 *   get:
 *     summary: Get all users pending approval
 *     tags: [Users]
 *     security:
 *       - tokenAuth: []
 *     responses:
 *       200:
 *         description: List of pending users
 */

/**
 * @swagger
 * /users/approve/{email}:
 *   put:
 *     summary: Approve a pending user
 *     tags: [Users]
 *     security:
 *       - tokenAuth: []
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema: { type: string , example: "er6@example.com" }
 *     responses:
 *       200:
 *         description: User approved
 */

/**
 * @swagger
 * /users/{email}:
 *   delete:
 *     summary: Delete a user by email
 *     tags: [Users]
 *     security:
 *       - tokenAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           {type: string,description: Email of the user to delete, example: "er6@example.com"}
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User deleted
 *       500:
 *         description: Server error
 */


userRouter.put("/approve/:email", protect, authorize("admin"), approveUser);

userRouter.get("/pending", protect, authorize("admin"), getPendingUsers);

userRouter.delete("/:email", protect, authorize("admin"), deleteUser);

export default userRouter;
