const Orders = require('../controllers/orders');

module.exports = (router) => {
    router.post('/order/create', Orders.createOrder);
}