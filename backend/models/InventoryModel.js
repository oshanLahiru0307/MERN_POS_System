const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    Product_name:{
        type: String,
        require: true
    },
    Product_Code:{
        type: String,
        unique: true,
        required: true
    },
    Category:{
        type: String,
        required: true,
        enum:['Health Care', 'Beauty & Cosmatics', 'Foods & Beverage', 'Stationary', 'Groceries']
    },
    Quantity: {
        type: Number,
        required: true,
        min: 0, 
    },
    UnitPrice: {
        type: Number,
        required: true,
        min: 0, 
    },
    Supplier: {
        type: String,
        required: true,
    },
    ReorderLevel: {
        type: Number,
        default: 10, // Threshold for low stock
    },
    LastRestocked: {
        type: Date,
        default: Date.now, // Tracks when the item was last restocked
    }
}, {timestamps: true})

module.exports = new mongoose.model('inventory', InventorySchema)