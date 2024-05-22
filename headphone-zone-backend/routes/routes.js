const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Product = require('../models/product');
const User = require('../models/user');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');


// Authentication routes
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);

// Product routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
// Add more routes for creating, updating, and deleting products

// Cart routes
router.post('/cart/add', cartController.addToCart);
router.put('/cart/update/:id', cartController.updateCartItem);
router.delete('/cart/remove/:id', cartController.removeFromCart);

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// User login endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ userId: user._id }, 'secret_key');
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// List all products endpoint
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get product by ID endpoint
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Search products endpoint
router.get('/products/search', async (req, res) => {
    try {
        const query = req.query.q;
        const products = await Product.find({ $text: { $search: query } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Filter products endpoint
router.get('/products/filter', async (req, res) => {
    try {
        const filteredProducts = await Product.find({ /* filter criteria */ });
        res.json(filteredProducts);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Add product to cart endpoint
router.post('/cart/add', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        res.status(200).json({ message: "Product added to cart successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Update cart item endpoint
router.put('/cart/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        res.status(200).json({ message: "Cart item updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.delete('/cart/remove/:id', async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: "Product removed from cart successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
