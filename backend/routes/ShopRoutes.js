const express = require('express')
const router = express.Router()
const {
    getShopsDetails,
    getShopDetails,
    AddNewShop,
    DeleteShopDetails,
    UpdateShopDetails
} = require('../controller/ShopController')

//get Shops details..
router.get('/', getShopsDetails)

//get a single Shop details..
router.get('/:id', getShopDetails)

//add a new shop..
router.post('/', AddNewShop)

//delete a shop..
router.delete('/:id', DeleteShopDetails)

//update a shop..
router.patch('/:id', UpdateShopDetails)

module.exports = router