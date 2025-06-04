import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import connectDB, { sequelize } from "./config/db.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import inventoryRouter from "./routes/inventory.routes.js";
import orderRouter from "./routes/order.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import uploadRouter from "./routes/upload.routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


connectDB();
sequelize.sync(); 


app.use("/api", authRouter);
app.use("/api/users", userRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/upload", uploadRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (req, res) => {
  res.send("Dealer & Distributor Management API is running ✅");
  console.log()
});


app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/api/signup`);
  console.log(`http://localhost:${PORT}/api-docs`);
});
