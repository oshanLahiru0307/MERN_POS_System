const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShopSchema = new Schema({
    Shop_name: {
        type: String,
        required: true
    },
    Shop_code: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        require: true
    },
    Manager: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Shop', ShopSchema)