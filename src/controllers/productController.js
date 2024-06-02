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

const addProduct = (req, res) => {
  const newProduct = req.body;
  productService.addProduct(newProduct);
  res.status(201).json(newProduct);
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    
  };
