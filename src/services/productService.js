const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../assets/data.json');
let products = require(dataFilePath);

const saveData = () => {
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));
};

const getAllProducts = () => products;

const getProductById = (id) => products.find(product => product.id === id);

module.exports = {
    getAllProducts,
    getProductById,
  };