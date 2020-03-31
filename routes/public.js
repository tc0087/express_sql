const express = require('express')
const path = require('path')
const productsController = require('../controllers/products')

/* Create the route */
const router = express.Router()

/* Define controller functions */
router.get('/', productsController.getProducts) 

/* Export router */
module.exports = router