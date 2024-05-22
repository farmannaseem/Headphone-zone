// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes'); // Import your routes file
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');


// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Define route to fetch products data
app.get('/api/products', (req, res) => {
    // Fetch products data from database or external API
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];
  
    // Send products data as JSON response
    res.json(products);
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/headphone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use routes
app.use('/api', routes); // Use the routes defined in routes.js under /api endpoint
app.use('/products', productRoutes); // Use the routes defined in productRoutes.js under /products endpoint

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
