const Product = require('../models/product');

const getAllProducts = async () => {
  try {
    console.log('Fetching all products...');
    const products = await Product.findAll();
    console.log('Products fetched:', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


const getProductById = async (id) => {
  try {
    return await Product.findByPk(id);
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

const addProduct = async (productData) => {
  try {
    return await Product.create(productData);
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

const updateProduct = async (id, productData) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      return await product.update(productData);
    }
    return null;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
