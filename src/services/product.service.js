import pool from "../config/db.js";

const getAllProducts = async () => {
  try {
    const [rows] = await pool.execute("SELECT * FROM products");

    const products = rows;
    console.log(products);

    return products;
  } catch (error) {
    throw error;
  }
};

export default { getAllProducts };
