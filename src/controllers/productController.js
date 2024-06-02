const productService = require('../services/productService');

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const product = productService.getProductById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
    getAllProducts,
    getProductById,
    
  };
