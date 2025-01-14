const express = require('express')
const router = express.Router()

const {
    getSuppliersDetails,
    getSupplierDetails,
    AddNewSupplier,
    DeleteSupplierDetails,
    UpdateSupplierDetails
} = require('../controller/SupplierController')

//get Supplier details..
router.get('/', getSuppliersDetails)

//get a single Supplier details..
router.get('/:id', getSupplierDetails)

//add a new Supplier..
router.post('/', AddNewSupplier)

//delete a Supplier..
router.delete('/:id', DeleteSupplierDetails)

//update a Supplier..
router.patch('/:id', UpdateSupplierDetails)

module.exports = router