const Inventory = require('../models/InventoryModel')

//get inventory details..
const getInventory = async (req,res) => {
    try{
        const Inventory = await Inventory.find().sort({creatdAt: -1})
        res.status(200).json(Inventory)
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


//delete an item from inventory..


//update an item from inventory..


module.exports = {
    getInventory,

}