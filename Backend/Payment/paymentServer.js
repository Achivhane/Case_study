const express = require('express');
const bodyParser= require("body-parser");
const mongoose = require('mongoose');
//importing DB connection
const connection = require('./database/DBconnection')
//importing swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();

//for testing 
var server =app.listen(port,function(){
    var host = server.address().address;
    var port = server.address().port;
  })
  module.exports = server;
// enable the cors
const cors =require('cors');
app.use(cors());
 
app.use(express.json());

//MIME type
// it is used to communicate with the client
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const payment = require('../Payment/Router/paymentRouter')
app.use(payment);

//defining the options of swaggwer
const swaggerOption={
    swaggerDefinition:{
        openapi:'3.0.0',
        info:{
            title:'express API for Payment',
            version:'1.0.0',
            contact:{
                author:"asmita",
            },
            server:["http://localhost:8000"]
        },
       
    },
    apis:["paymentServer.js"]
    }
    const swaggerDocs =swaggerJsDoc(swaggerOption);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(express.json());
// schema declaration/definition
/**
 * @swagger
 * definitions:
 *  passengers:
 *   type: object
 *   properties:
 *    bookingId:
 *     type: string
 *     description: bookingID of passenger
 *     example: 8294057fdgs2
 */

// swagger get request 
/**
 * @swagger
 *  /paymentapi/postingpayment:
 *   get:
 *    summary: fetch passenger,
 *    description: payment
 *    responses:
 *     200:
 *      description: successfull
 *     404:
 *      description: error
 */

 //post request for login

/**
 * @swagger
 *  /paymentapi/postingpayment:
 *   post:
 *    summary: passenger login,
 *    description: payment
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#definitions/passengers'
 *    responses:
 *     200:
 *      description: successfull
 */

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

var port = process.env.PORT || 8000; 
app.listen(port);
console.log('Server Listening to payment on port ' + port);