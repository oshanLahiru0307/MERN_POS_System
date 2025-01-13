const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },    
    NIC: {
        type: String,
        unique: true,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    LoyaltyPoints: {
        type: Number,
        default: 0,
        min: 0,
    }

}, {timestamps: true})

module.exports = mongoose.model('Customer', CustomerSchema);