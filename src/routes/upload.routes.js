
import { Router } from "express";
import upload from "../middlewares/upload.js";
import { protect, authorize } from "../middlewares/auth.js";
import { uploadDocument,getDocumentsByProduct } from "../controllers/uploadController.js";

/**
 * @swagger
 * /uploads/{id}:
 *   get:
 *     summary: Get documents by product ID
 *     tags: [Uploads]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: List of documents
 */

/**
 * @swagger
 * /uploads:
 *   post:
 *     summary: Upload a document for a product
 *     tags: [Uploads]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 {type: string,format: binary, description: The file to upload}
 *               productId:
 *                 {type: string, description: ID of the product, example: "1"}
 *     responses:
 *       201:
 *         description: File uploaded
 */


const router = Router();
router.get("/:id", getDocumentsByProduct); 
router.post("/", protect, authorize("admin", "distributor"), upload.single("file"), uploadDocument);
export default router;
