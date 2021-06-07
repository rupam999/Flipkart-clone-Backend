const Payment = require('../controllers/payment');

module.exports = (router) => {
    router.get('/payment/getDetails', Payment.getPaymentDetails);
}