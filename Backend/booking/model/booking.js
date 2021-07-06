const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var BookingSchema = new Schema({

  
    passengerID:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Passenger',
        reuired:true

    },
    trainID:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Train',
        reuired:true
   },
    bookedDate:{
        type: Date
    }
    ,
    paymentDone:{
        type: String,
        required :true
    }
})
module.exports = mongoose.model('Booking', BookingSchema);
