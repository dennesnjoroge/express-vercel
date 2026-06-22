import express from "express";
const app = express();
import productRoutes from "./routes/product.route.js";

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello",
  });
});

app.use("/api/v1", productRoutes);

app.listen(5000, () => {
  console.log("server running on port 5000");
});

//vercel
export default app;
