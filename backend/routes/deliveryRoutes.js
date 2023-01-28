const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const deliveryController = require('../controllers/deliveryController')


router.post('/new', deliveryController.addDelivery);
module.exports = router;