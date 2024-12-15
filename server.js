const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

// '0.0.0.0' para escutar em qualquer interface de rede
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://xxx.xxx.x.xxx:${PORT}`); // Coloque aqui o IP do seu computador
});
