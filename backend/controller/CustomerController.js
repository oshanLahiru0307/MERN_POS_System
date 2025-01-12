const express = require('express')

//get all customers..
const getAllCustomers =  (req,res) => {
    res.json({mssg:"get all customers"})
}

//get a single customer..
const getSingleCustomer = (req,res) => {
    res.json({mssg:"get a single customer"})
}

//create a customer..
const createCustomer = (req,res) => {
    res.json({mssg:"create a customer"})
}

//deletee a customer..
const deleteCustomer = (req,res) => {
    res.json({mssg:"delete a customer"})
}

//update a customer..
const updateCustomer = (req,res) => {
    res.json({mssg:"update a customer"})
}

module.exports = {
    getAllCustomers,
    getSingleCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer
}