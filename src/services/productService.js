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

const deleteProduct = (id) => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    saveData();
    return deletedProduct;
  }
  return null;
};

const filterProducts = (filter) => {
  return products.filter(product => {
    let valid = true;
    if (filter.brand) {
      valid = valid && product.brand === filter.brand;
    }
    if (filter.stockover) {
      valid = valid && product.stock >= filter.stockover;
    }
    if (filter.stockbelow) {
      valid = valid && product.stock <= filter.stockbelow;
    }
    if (filter.discountover) {
      valid = valid && product.discount >= filter.discountover;
    }
    if (filter.discountbelow) {
      valid = valid && product.discount <= filter.discountbelow;
    }
    if (filter.expireover) {
      valid = valid && new Date(product.expiryDate) >= new Date(filter.expireover);
    }
    if (filter.expirebelow) {
      valid = valid && new Date(product.expiryDate) <= new Date(filter.expirebelow);
    }
    return valid;
  });
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    filterProducts
  };