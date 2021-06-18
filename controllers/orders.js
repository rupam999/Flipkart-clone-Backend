const ORDERS_MODEL = require('../models/ordersModel');

const createOrder = async (req, res) => {
    try {
        const {user, item, totalAmount, shippingInformation, isPaid, paymentInformation} = req.body;

        const newOrder = new ORDERS_MODEL.Order({
            user,
            item,
            totalAmount,
            shippingInformation,
            isPaid,
            paymentInformation
        });

        await newOrder.save((error, response) => {
            if(error) {
                console.log('Error at save order', error);
                res.status(500);
                res.json({
                    mesage: 'error'
                });
            } else {
                console.log(response);
                res.json({
                    message: 'success'
                });
            }
        });

        res.send('ok');
    } catch(error) {
        console.log('Error at createOrders', error);
        res.status(500);
        res.json({
            mesage: 'error'
        });
    }
}

module.exports = {
    createOrder
}