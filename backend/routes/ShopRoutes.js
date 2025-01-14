const express = require('express')
const router = express.Router()

//get Shops details..
router.get('/', getShops)

//get a single Shop details..
router.get('/:id', getShop)

//add a new shop..
router.post('/', addShop)

//delete a shop..
router.delete('/:id', deleteShop)

//update a shop..
router.patch('/:id', UpdateShop)

module.exports = router