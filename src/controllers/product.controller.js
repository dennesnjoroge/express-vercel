import productService from "../services/product.service.js";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = (req, res, next) => {
  try {
    const productId = req.params.id;
    res.status(200).json({
      status: "success",
      productId,
    });
  } catch (error) {
    next(error);
  }
};

export default { getAllProducts, getProductById };
