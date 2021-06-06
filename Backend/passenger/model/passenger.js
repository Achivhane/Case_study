const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var PassengerSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String, 
        unique:[true, "Email is already Exit"]
    },
    password:{
        type: String,
        unique:true
    },
    mobile_number:{
        type:Number
        // unique:true
    }
})

module.exports = mongoose.model('Passenger', PassengerSchema);