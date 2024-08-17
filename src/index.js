const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to mongo
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'))
    .catch(e => console.log(e));

// Define your routes here
const exampleRoutes = require('./routes/produts.js');
app.use('/api/products', exampleRoutes);

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});