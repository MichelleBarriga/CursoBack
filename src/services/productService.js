const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../assets/data.json');
let products = require(dataFilePath);

const saveData = () => {
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));
};

const getAllProducts = () => products;

const getProductById = (id) => products.find(product => product.id === id);

const addProduct = (product) => {
  products.push(product);
  saveData();
};

const updateProduct = (id, updatedProduct) => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    saveData();
    return products[index];
  }
  return null;
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    
  };