const express = require('express');
const router = express.Router();

//require controllers
const product_controller = require('../controllers/product.controller');

//test controller
router.get('/test', product_controller.test);

module.exports = router;