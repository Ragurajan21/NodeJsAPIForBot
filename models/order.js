const mongoose = require('mongoose');
const { schema } = require('./iceCream');
const Schema = mongoose.Schema;
  

const specialiceCreamSchema = new Schema({
    icecream_id :
    {
        type:String,
        required: true,
        unique:false
    },
    icecream_name :
    {
        type:String,
        required: true,
        unique:false
    },
    quantity :
    {
        type:Number,
        required: true,
        unique:false
    }
});
 
const iceCreamTypeSchema = new Schema(
    {
        flavor:  {
            type:String,
            required: true,
            unique:false
        },
    toppings :[String],
    sauce:[String],
    quantity :
    {
        type:Number,
        required: true,
        unique:false
    }
    });
const orderSchema = new Schema({
    order_id:
    {
        type: Number,
        required : false,
        unique: false
    },
    customer_name:
    {
        type :String,
        required: true,
        unique : false
    },
    status: 
    {
        type :String,
        required: true,
        unique : false
    },
    icecream:[iceCreamTypeSchema],
    specialiceCream : [specialiceCreamSchema]

});

    var Orders = mongoose.model('Order',orderSchema);

module.exports = Orders;