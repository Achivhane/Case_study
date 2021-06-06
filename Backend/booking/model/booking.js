const express = require('express');
const mongoose = require('mongoose');

//create schema

mongoose.model('Booking', {
  
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
