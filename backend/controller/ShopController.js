const Shop = require('../models/ShopModel')

//get Shops details..
const getShopsDetails = async (req,res) => {
    try{
        const shops = await Shop.find().sort({createdAt: -1})
        res.status(200).json(shops)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//get a single Shop details..
const getShopDetails = async (req,res) => {
    const {id} = req.params
    try{
        const shop = await Shop.findById(id)
        if(!shop){
            return res.status(400).json({error:"there is not such a shop"})
        }
        res.status(200).json(shop)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//add a new shop..
const AddNewShop = async (req,res) => {
    const {
        Shop_name,
        Shop_code,
        Contact,
        Manager
    } = req.body
    try{
        const newshop = await Shop.create({Shop_name, Shop_code, Contact, Manager})
        res.status(200).json(newshop)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a shop..
const DeleteShopDetails = async (req,res) => {
    const {id} = req.params
    try{
        const shop = await Shop.findOneAndDelete({_id: id})
        if(!shop){
            return res.status(400).json({error:"there is not such a shop"})
        }
        res.status(200).json(shop)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//update a shop..
const UpdateShopDetails = async (req,res) => {
    const {id} = req.params
    try{
        const shop = await Shop.findByIdAndUpdate({_id: id}, {...req.body})
        if(!shop){
            return res.status(400).json({error:"there is not such a shop"})
        }
        res.status(200).json(shop)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getShopsDetails,
    getShopDetails,
    AddNewShop,
    DeleteShopDetails,
    UpdateShopDetails
}