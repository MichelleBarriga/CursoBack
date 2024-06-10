const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database.config');
const healthyRoutes = require('./routes/healthy');
const productsRoutes = require('./routes/product');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

app.use('/', healthyRoutes); // Descomentar si necesitas usar healthyRoutes
app.use('/products', productsRoutes);

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });