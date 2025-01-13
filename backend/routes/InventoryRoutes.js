const express = require('express')
const router = express.Router()
const{
    getInventory,
    getItem,
    addItem,
    deleteItem,
    UpdateItem
} = require('../controller/InventoryController')

//get inventory details..
router.get('/', getInventory)

//get a single item fron inventory..
router.get('/:id', getItem)

//add a new item into inventory..
router.post('/', addItem)

//delete an item from inventory..
router.delete('/:id', deleteItem)

//update an item from inventory..
router.patch('/:id', UpdateItem)

module.exports = router