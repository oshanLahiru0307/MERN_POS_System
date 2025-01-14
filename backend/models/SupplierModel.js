const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SupplierSchema = new Schema({
    Supplier_name: {
        type: String,
        required: true
    },
    Supplier_code: {
        type: String,
        unique: true,
        required: true,
    },
    Contact: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    RegisteredDate: {
        type: Date,
        default: Date.now, // Automatically sets the registration date
    },
}, {timestamps: true})

module.exports = mongoose.model('supplier', SupplierSchema)