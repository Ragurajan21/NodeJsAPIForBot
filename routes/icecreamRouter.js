const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const IceCreamDA = require('../util/iceCreamDA');
const IceCreams = require('../models/iceCream');

const iceCreamRouter = express.Router();

iceCreamRouter.use(bodyParser.json());

iceCreamRouter.route('/')
.get((req,res,next) => {
    res = IceCreamDA.GetAllCreams(req,res);
    
})
.post((req, res, next) => {
    
    res = IceCreamDA.AddIceCream(req,res);
})



module.exports = iceCreamRouter;