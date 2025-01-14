const express = require('express')
const router = express.Router()

const {
    getSuppliersDetails,
    getSupplierDetails,
    AddNewSupplier,
    DeleteSupplierDetails,
    UpdateSupplierDetails
} = require('../controller/SupplierController')

//get Shops details..
router.get('/', getSuppliersDetails)

//get a single Shop details..
router.get('/:id', getSupplierDetails)

//add a new shop..
router.post('/', AddNewSupplier)

//delete a shop..
router.delete('/:id', DeleteSupplierDetails)

//update a shop..
router.patch('/:id', UpdateSupplierDetails)

module.exports = router