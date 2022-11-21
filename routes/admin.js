const path=require('path');

const express=require('express');

const rootDir=require('../util/path');

const router=express.Router();

//const products=[];
const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddProduct);
 
router.post('/add-product', productsController.postAddProduct);

module.exports=router;
//exports.routes=router;
//exports.products=products;
