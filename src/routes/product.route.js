import { Router } from "express";
import productController from "../controllers/product.controller.js";
const router = Router();

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);

export default router;
