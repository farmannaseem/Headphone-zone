// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: String // Optional field for storing image URL
});

const Product = mongoose.model('product', productSchema);

module.exports = product;
