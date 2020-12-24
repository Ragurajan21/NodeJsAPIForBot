const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Orders = require('../models/order');
const IceCreams = require('../models/iceCream');

module.exports.AddOrder =  function AddOrder(order,res)
{
   
    Orders.create(order.body)
    .then((order) => {
        console.log('Order Created ', order);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "order_id": order.order_id,
            "status": order.status
        });
    });
    return res;
};
 module.exports.GetOrderStatus = function GetOrderStatus(req,res)
 {
    Orders.find({order_id : req.params.order_id})
    .then((order) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(order);
    });
    return res;
 };
 module.exports.DeleteOrder = function DeleteOrder(req,res)
 {
    Orders.find({order_id : req.params.order_id}, null, {limit: 1}).remove()
    .then((order) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "Message":"Deleted successfully",
            "Order_Id":req.params.order_id
        });
    });
    return res;
 };