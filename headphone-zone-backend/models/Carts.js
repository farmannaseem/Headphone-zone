const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    // Define the schema fields for the Cart model
    // For example:
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    // Add more fields as needed
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
