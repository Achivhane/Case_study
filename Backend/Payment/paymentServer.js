const express = require('express');
const bodyParser= require("body-parser");
const mongoose = require('mongoose');
const app = express();
// enable the cors
const cors =require('cors');
app.use(cors());

// connect to our database
mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/Payment?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 

app.use(express.json());

//MIME type
// it is used to communicate with the client
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const payment = require('../Payment/Router/paymentRouter')
app.use(payment);

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

var port = process.env.PORT || 8000; 
app.listen(port);
console.log('Server Listening to payment on port ' + port);