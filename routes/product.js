const Product = require('../controllers/product'); 

module.exports = (router) => {
    router.post('/product/add/details', Product.addProductDetails);
}