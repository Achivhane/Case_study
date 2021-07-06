const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var TicketSchema = new Schema({
    name:{
        type: String
    },
    train_name:{
        type: String
    },
    fare:{
        type: String
    },
    from:{
        type:String
        // unique:true
    },
    to:{
        type:String
        // unique:true
    },
    Time:{
        type:String
        // unique:true
    }
})

module.exports = mongoose.model('Ticket', TicketSchema);