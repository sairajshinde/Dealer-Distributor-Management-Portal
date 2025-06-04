import { Router } from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";
import { protect, authorize } from "../middlewares/auth.js";

/**
 * @swagger
 * /dashboard/stats:
 *   get:
 *     summary: Get dashboard stats data
 *     tags: [Dashboard]
 *     security:
 *       - tokenAuth: []  # Required if route is protected by JWT
 *     responses:
 *       200:
 *         description: Dashboard data
 *       401:
 *         description: Unauthorized (No token or invalid token)
 */



const router = Router();

router.get("/stats", protect, authorize("admin"), getDashboardStats);

export default router;
