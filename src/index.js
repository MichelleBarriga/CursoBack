const express = require('express');
const dotenv = require('dotenv');
const healthyRoutes = require('./routes/healthy');
const productsRoutes = require('./routes/product');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

app.use('/', healthyRoutes); // Descomentar si necesitas usar healthyRoutes
app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
