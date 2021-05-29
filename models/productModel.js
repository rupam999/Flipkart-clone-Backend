const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    comment: {
        type: String
    }
}, {
    timestamps: true
});

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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
    subCategory: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    review: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numberOfReview: {
        type: Number,
        required: true,
        default: 0
    },
    mrp: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
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