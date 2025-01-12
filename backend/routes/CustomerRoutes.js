const express = require("express")
const router = express.Router()
const {
    getAllCustomers,
    getSingleCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer
} = require ('./CustomerRoutes.js')

//get all customers..
router.get('/', getAllCustomers)

//get a single customer..
router.get('/:id', getSingleCustomer)

//create a customer..
router.post('/', createCustomer)

//deletee a customer..
router.delete('/:id', deleteCustomer)

//update a customer..
router.patch('/:id', updateCustomer)

module.exports = router