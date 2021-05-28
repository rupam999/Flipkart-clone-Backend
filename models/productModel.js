const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
        required: true
    }, 
    manufacturer: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    expiry: {
        tyepe: String
    },
    weight: {
        type: String
    },
    vegetarian: {
        type: Boolean
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
    Product
}