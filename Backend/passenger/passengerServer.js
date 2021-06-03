var express = require('express');
var bodyParser= require("body-parser");
var mongoose = require('mongoose');
const cors = require('cors');
var app = express();

// // connect to our database
mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/Passenger?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true
}));
app.use(bodyParser.json());

const passenger = require('../passenger/model/passenger')

app.use(passenger);

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

var port = process.env.PORT || 5003; 
app.listen(port);
console.log('Server Listening on port ' + port);