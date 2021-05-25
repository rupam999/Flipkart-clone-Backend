const SellerRoute = require('../controllers/sellerAddProduct');

module.exports = (router) => {
    router.get('/seller/addProduct', SellerRoute.addProduct);
}