const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShopSchema = new Schema({
    Shop_name: {
        type: String,
        required: true
    },
    Shop_code: {
        type: String,
        unique:true,
        required: true
    },
    Contact: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    Manager: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Shop', ShopSchema)