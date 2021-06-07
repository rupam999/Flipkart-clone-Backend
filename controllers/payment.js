const Razorpay = require('razorpay')

const razorpay = new Razorpay({
	key_id: process.env.PAYMENT_KEY_ID,
	key_secret: process.env.PAYMENT_KEY_SECRET
})

const getPaymentDetails = async (req, res) => {
	const {creditAmount=100} = req.body;
	const makeid = (length) => {
		let result = '';
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
		   result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	// Gateway Srart
    const payment_capture = 1
	const amount = creditAmount
	const currency = 'INR'
	const options = {
		amount: amount * 100, // Amount always in paisa so... *100
		currency,
		receipt: `${makeid(16)}`,
		payment_capture
    }
    try {
		const response = await razorpay.orders.create(options)
		// console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
		res.status(500);  
		res.json({})        
	}
}

module.exports = {
    getPaymentDetails
}