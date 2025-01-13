const Inventory = require('../models/InventoryModel')

//get inventory details..
const getInventory = async (req,res) => {
    try{
        const inventory = await Inventory.find({}).sort({creatdAt: -1})
        res.status(200).json(inventory)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//get a single item fron inventory..
const getItem = async (req,res) => {
    const {id} = req.params
    try{
        const item = await Inventory.findById(id)
        if(!item){
            return res.status(400).json({mssg:"there is not such a item"})
        }
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//add a new item into inventory..
const addItem = async (req,res) => {
    const {
            Product_name,
            Product_Code,
            Category,
            Quantity,
            UnitPrice,
            Supplier,
            ReorderLevel,
    } = req.body
    try{
        const item = await Inventory.create({Product_name, Product_Code, Category, Quantity, UnitPrice, Supplier, ReorderLevel})
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete an item from inventory..
const deleteItem = async (req,res) => {
    const {id} = req.params
    try{
        const item = await Inventory.findOneAndDelete({_id: id})
        if(!item){
            return res.status(400).json({mssg:"there is not such a item"})
        }
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//update an item from inventory..
const UpdateItem = async (req,res) => {
    const {id} = req.params
    try{
        const item = await Inventory.findByIdAndUpdate({_id: id}, {...req.body})
        if(!item){
            return res.status(400).json({mssg:"there is not such a item"})
        }
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getInventory,
    getItem,
    addItem,
    deleteItem,
    UpdateItem
}