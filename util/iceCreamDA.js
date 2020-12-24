const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Orders = require('../models/order');
const IceCreams = require('../models/iceCream');

module.exports.AddIceCream = function AddIceCream(req,res)
{
    IceCreams.create(req.body)
    .then((iceCream) => {
        console.log('IceCream Created ', iceCream);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(iceCream);
    });
    return res;
};
 module.exports.GetAllCreams = function GetAllCreams(req,res)
 {
    res.statusCode = 200;

         if(req.headers.flavor != null && req.headers.sauce != null &&  req.headers.toppings != null)
         {
            IceCreams.find({toppings : req.headers.toppings,flavor :req.headers.flavor,sauce : req.headers.sauce})
            .then((iceCreams) => {
                res.json(iceCreams);
            });
         }
         else if(req.headers.flavor != null && req.headers.toppings != null)
         {
            IceCreams.find({flavor :req.headers.flavor,toppings : req.headers.toppings})
            .then((iceCreams) => {
                res.json(iceCreams);
            });
         }
         else if(req.headers.flavor != null && req.headers.sauce != null)
         {
            IceCreams.find({flavor :req.headers.flavor,toppings : req.headers.sauce})
            .then((iceCreams) => {
                res.json(iceCreams);
            });
         }
         else if(req.headers.toppings != null && req.headers.sauce != null)
         {
            IceCreams.find({toppings :req.headers.toppings,sauce : req.headers.sauce})
            .then((iceCreams) => {
                res.json(iceCreams);
            });
         }
        
         else if(req.headers.flavor != null)
         {
            IceCreams.find({flavor :req.headers.flavor})
            .then((iceCreams) => {
                res.json(iceCreams);
            });
         }
         else if(req.headers.sauce != null)
         {
            IceCreams.find({sauce : req.headers.sauce})
                .then((iceCreams) => {
                    res.json(iceCreams);
                });
         }
         else if(req.headers.toppings != null)
         {
            IceCreams.find({toppings :req.headers.toppings})
                .then((iceCreams) => {
                    res.json(iceCreams);
                });
         }
         else
         {
             IceCreams.find({})
                .then((iceCreams) => {
                    res.json(iceCreams);
                });
         }
        
        return res;
      
 };