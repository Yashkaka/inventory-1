const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const productController = require('../controllers/productController')

router.post('/new', productController.addNew);

module.exports = router;