const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	item: [
		{
			name: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			product: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
		},
	],
	totalAmount: {
		type: Number,
		required: true,
	},
	shippingInformation: [
		{
			name: { type: String, required: true },
			zipCode: { type: Number, required: true },
			mobileNumber: { type: Number, required: true },
			fullAddress: { type: String, required: true },
		},
	],
	isPaid: {
		type: Boolean,
		required: true,
		default: false,
	},
	paymentInformation: [
		{
			id: { type: String },
		},
	],
});

const Order = mongoose.model('Order', ordersSchema);

module.exports = {
	Order,
};
