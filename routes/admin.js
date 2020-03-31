const express = require('express')
const path = require('path')
const productsController = require('../controllers/products')

/* Create the route */
const router = express.Router()

/* Define controller functions */
router.get('/add-product', productsController.getAddProduct) 

router.post('/add-product', productsController.postAddProduct)

/* Export router */
module.exports = router