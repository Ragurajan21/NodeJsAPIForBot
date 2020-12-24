const { strict } = require('assert');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const iceCremSchema = new Schema({
    icecream_id :
    {
        type:String,
        required: true,
        unique:true
    },
    icecream_name :
    {
        type:String,
        required: true,
        unique:true
    },
    available_quantity :
    {
        type:Number,
        required: true,
        unique:false
    },
    flavor: [String],
    toppings :[String],
    sauce:[String],
    ImageUrl:
    {
        type:String,
        required: true,
        unique:true
    }

});
var IceCreams = mongoose.model('IceCream',iceCremSchema);
// var Dishes = mongoose.model('Dish', dishSchema);

module.exports = IceCreams;