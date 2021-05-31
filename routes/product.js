const Product = require('../controllers/product'); 

module.exports = (router) => {
    router.post('/product/add/details', Product.addProductDetails);
    router.get('/product/find', Product.getAllProducts);
    router.get('/product/seperate', Product.getParticularProduct);
}