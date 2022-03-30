//const mysql = require('mysql');
const mongoose = require('mongoose');


//schema
const orderItemSchema = mongoose.Schema({
    quantity:{
        type: Number,
        required: true
    },

    products:[{
        type: mongoose.Schema.Types.ObjectId,
          ref: 'Product' 
    }]   
})


//exporting the model to make it  accesseable from any where in the code
exports.OrderItem = mongoose.model('OrderItem',orderItemSchema);