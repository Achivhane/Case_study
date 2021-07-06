const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var PassengerSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    mobile_number:{
        type:Number
        // unique:true
    }
})

module.exports = mongoose.model('Passenger', PassengerSchema);