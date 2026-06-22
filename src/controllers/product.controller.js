const getAllProducts = (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
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
