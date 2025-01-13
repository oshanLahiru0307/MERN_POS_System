const Customer = require('../models/CustomerModel')

//get all customers..
const getAllCustomers =  async (req,res) => {
    try{
        const customers = await Customer.find().sort({createdAt: -1})
        res.status(200).json(customers)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//get a single customer..
const getSingleCustomer = async (req,res) => {
    const {id} = req.params
    try{
        const customer = await Customer.findById(id)
        if(!customer){
            return res.status(404).json({mssg:"there is not such a customer"})  
        }
        res.status(200).json(customer)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//create a customer..
const createCustomer = async (req,res) => {
    const {
        First_name,
        Last_name,
        NIC,
        Phone,
        Email,
        Address,
        LoyaltyPoints
    } = req.body

    try{
        const newCustomer = await Customer.create({First_name, Last_name, NIC, Phone, Email, Address, LoyaltyPoints})
        res.status(200).json(newCustomer)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//deletee a customer..
const deleteCustomer = async (req,res) => {
    const {id} = req.params
    try{
        const response = await Customer.findOneAndDelete({_id: id})
        if(!response){
            return res.status(400).json({mssg:"there is not such a customer"})
        }
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//update a customer..
const updateCustomer = async (req,res) => {
    const {id} = req.params
    try{
        const customer = await Customer.findByIdAndUpdate({_id: id},{...req.body})
        if(!customer){
            return res.status(400).json({mssg:"there is not such a customer"})
        }
        res.status(200).json(customer)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getAllCustomers,
    getSingleCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer
}