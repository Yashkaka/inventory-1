const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deliverySchema = new Schema({
    productName: { type: String, required: true },
    productId: { type: mongoose.Types.ObjectId, required: true, ref: 'Product' },
    estimatedDeliTime: { type: String, required: true },
    actualDeliTime: { type: String, required: true },
    noOfPallet: { type: Number, required: true }

})

module.exports = mongoose.model('Delivery', deliverySchema)