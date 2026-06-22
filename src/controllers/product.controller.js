import productService from "../services/product.service.js";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      status: false,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export default { getAllProducts, getProductById };
