const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    perishable: { type: String, required: true }

})
module.exports = mongoose.model('Product', productSchema)