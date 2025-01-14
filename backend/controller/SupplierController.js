const Suppliers = require('../models/SupplierModel')

//get Shops details..
const getSuppliersDetails = async (req,res) => {
    try{
        const suppliers = await Suppliers.find().sort({createdAt: -1})
        res.status(200).json(suppliers)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//get a single Shop details..
const getSupplierDetails = async (req,res) => {
    const {id} = req.params
    try{
        const supplier = await Suppliers.findById(id)
        if(!supplier){
            return res.status(400).json({error:"there is not such a supplier"})
        }
        res.status(200).json(supplier)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//add a new shop..
const AddNewSupplier = async (req,res) => {
    const {
        Supplier_name,
        Supplier_code,
        Contact,
        Email,
        Address
    } = req.body
    try{
        const newSupplier = await Suppliers.create({Supplier_name, Supplier_code, Contact, Email, Address})
        res.status(200).json(newSupplier)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a shop..
const DeleteSupplierDetails = async (req,res) => {
    const {id} = req.params
    try{
        const supplier = await Suppliers.findOneAndDelete({_id: id})
        if(!supplier){
            return res.status(400).json({error:"there is not such a supplier"})
        }
        res.status(200).json(supplier)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//update a shop..
const UpdateSupplierDetails = async (req,res) => {
    const {id} = req.params
    try{
        const supplier = await Suppliers.findByIdAndUpdate({_id: id}, {...req.body})
        if(!supplier){
            return res.status(400).json({error:"there is not such a supplier"})
        }
        res.status(200).json(supplier)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getSuppliersDetails,
    getSupplierDetails,
    AddNewSupplier,
    DeleteSupplierDetails,
    UpdateSupplierDetails
}