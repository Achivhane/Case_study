const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var PaymentSchema = new Schema({
    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Passenger',
        reuired:true

    }
    
})
module.exports = mongoose.model('Payment', PaymentSchema);

