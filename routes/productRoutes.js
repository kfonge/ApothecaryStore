//this file declares the routes the user can visit
//references some of the methods (fr controller) that sends/shows data/pages to user 

// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of product
const Product = require('../models/product')

// Bring in seed data
// const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllProducts, 
    showNewView, 
    createNewProduct,
    seedStarterData,
    showOneProduct,
    showEditView,
    updateOneProduct,
    deleteOneProduct
} = require('../controllers/productController')

// Bring in controller object (with methods attached)
// const productController = require('../controllers/productController')
// Example: router.get('/', productController.findAllProducts)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllProducts)

// // Setup "new" route
// router.get('/new', showNewView)

// // Setup "destroy" route
// router.delete('/:id', deleteOneProduct)

// // Setup "update" route
// router.put('/:id', updateOneProduct)

// // Setup "create" route
// router.post('/', createNewProduct)

// // Setup "edit" route
// router.get('/:id/edit', showEditView)

// // Setup "show" route  
// router.get('/:id', showOneProduct)

// Setup "seed" route
// router.get('/seed', seedStarterData)


module.exports = router
