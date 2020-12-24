const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Orders = require('../models/order');
const IceCreams = require('../models/iceCream');
const orderRouter = express.Router();
const orderDA = require('../util/orderDA');
orderRouter.use(bodyParser.json());



orderRouter.route('/createorder')
.post((req, res,next) => {
     req.body.order_id = Math.floor(Math.random() * (1000000 - 1000 + 1) + 1000);
     res =  orderDA.AddOrder(req,res);    
})


orderRouter.route('/getorderstatus/:order_id')
.get((req,res,next) => {
    res =  orderDA.GetOrderStatus(req,res);
    
})
orderRouter.route('/deleteorder/:order_id')
.delete((req, res, next) => {
    res = orderDA.DeleteOrder(req,res);  
}
);

module.exports = orderRouter;