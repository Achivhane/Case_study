const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var BookedTrainSchema = new Schema({
    from:{
        type:String
    },
    to:{
        type:String
    },
    train_name:{
        type:String
    }, departure_time:{
        type:String
    },
    arrival_time:{
        type:String
    },
    fare:{
        type:String
    }

})
module.exports = mongoose.model('BookedTrain', BookedTrainSchema);
