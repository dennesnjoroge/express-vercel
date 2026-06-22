import pool from "../config/db.js";
import AppError from "../utils/error.js";

const getAllProducts = async () => {
  try {
    const [rows] = await pool.execute(
      "SELECT id, name, price, description, stock FROM products",
    );

    const products = rows;

    return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (productId) => {
  try {
    const [rows] = await pool.execute(
      `SELECT id, name, price, description, stock FROM products WHERE id = ?`,
      [productId],
    );

    if (rows.length === 0) {
      throw new AppError("Product not found", 404);
    }

    const product = rows[0];

    console.log(product);
    return product;
  } catch (error) {
    throw error;
  }
};

export default { getAllProducts, getProductById };
