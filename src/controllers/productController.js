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

const updateProduct = (req, res) => {
  const updatedProduct = productService.updateProduct(req.params.id, req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const deleteProduct = (req, res) => {
  const deletedProduct = productService.deleteProduct(req.params.id);
  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const partialUpdateProduct = (req, res) => {
  const updatedProduct = productService.updateProduct(req.params.id, req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const filterProducts = (req, res) => {
  const filteredProducts = productService.filterProducts(req.body.filter);
  res.json(filteredProducts);
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    partialUpdateProduct,
    filterProducts
  };
