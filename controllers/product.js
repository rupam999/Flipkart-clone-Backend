const PRODUCT_MODEL = require('../models/productModel');

const addProductDetails = async (req, res) => {
    const {user, name, brand, category, subCategory, description, mrp, price, countInStock, origin, manufacturer, url} = req.body;

    const newProduct = new PRODUCT_MODEL.Product({
        user,
        name,
        brand,
        category,
        subCategory,
        description,
        mrp,
        price,
        countInStock,
        origin,
        manufacturer,
        url
    });

    await newProduct.save((err, response) => {
        if(err) {
            // console.log(err)
            res.status(400);
            res.send({
                message: 'Internal Server Error'
            });
        } else {
            res.send({
                message: 'success'
            });
        }
    });
}

const getAllProducts = async (req, res) => {
    try {
        const {search, page=1} = req.query;
        const pageSize = Number(process.env.PAGINATION_LIMIT);
        const pageNumber = page;
        
        const keyword = search ? {
            name: {
                $regex: search,
                $options: 'i'
            }
        } : {};

        const count = await PRODUCT_MODEL.Product.countDocuments({...keyword});
        const product = await PRODUCT_MODEL.Product.find({...keyword})
            .limit(pageSize).skip(pageSize * (pageNumber - 1));

        if(product) {
            res.json({
                message: 'success',
                currentPage: Number(page),
                totalPage: Math.ceil(count / pageSize),
                product
            });
        } else {
            res.json({
                message: 'No Product Found'
            });
        }

    } catch(error) {
        console.log('ERROR at find Product', error);
        res.status(400);
        res.json({
            message: 'error',
            error
        });
    }
}

module.exports = {
    addProductDetails,
    getAllProducts
}