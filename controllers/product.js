const PRODUCT_MODEL = require('../models/productModel');

const addProductDetails = async (req, res) => {
    const {name, brand, description, mrp, price, origin, manufacturer, url} = req.body;

    const newProduct = new PRODUCT_MODEL.Product({
        name,
        brand,
        description,
        mrp,
        price,
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

module.exports = {
    addProductDetails
}