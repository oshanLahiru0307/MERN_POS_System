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
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    loyaltyPoints: {
        type: Number,
        default: 0,
        min: 0,
    }

}, {timestamps: true})

const Customer = mongoose.model('Customer', CustomerSchema);