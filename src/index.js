import "dotenv/config";
import express from "express";
import productRoutes from "./routes/product.route.js";
import pool from "./config/db.js";
import AppError from "./utils/error.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello",
  });
});

app.use("/api/v1", productRoutes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      status: "fail",
      message: error.message,
    });
    return;
  } else {
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

export default app;
