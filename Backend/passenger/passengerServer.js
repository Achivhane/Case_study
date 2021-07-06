 var express = require('express');
var bodyParser= require("body-parser");
var mongoose = require('mongoose');
const cors = require('cors');

//importing DB connection
const connect =require('./database/DBconnection');

//importing swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
var app = express();
var app1 = express();

//enable the cors
app.use(cors());
app1.use(cors());

//MIME type---->it is used to communicate with the client
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app1.use(bodyParser.urlencoded({ extended: false}));
app1.use(bodyParser.json());
//requiring the routes
const passenger = require('../passenger/Router/passengerRouter')
app.use(passenger);
app1.use(passenger);

//defining the options of swaggwer
const swaggerOption={
    swaggerDefinition:{
        openapi:'3.0.0',
        info:{
            title:'express API for Passenger',
            version:'1.0.0',
            contact:{
                author:"asmita",
            },
            server:["http://localhost:5000"]
        },
       
    },
    apis:["passengerServer.js"]
    }
    const swaggerDocs =swaggerJsDoc(swaggerOption);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app1.use(express.json());
app.use(express.json());
// schema declaration/definition

/**
 * @swagger
 * definitions:
 *  passengers:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of passenger
 *     example: 
 *    email:
 *     type: string
 *     description: email of passenger
 *     example: 
 *    password:
 *     type: string
 *     description: password of passenger
 *     example: 
 *    phone:
 *     type: number
 *     description: number of passenger
 *     example: 
 *    age:
 *     type: number
 *     description: age of passenger
 *     example: 
 */

// swagger get request 

/**
 * @swagger
 *  /api/passengers:
 *   get:
 *    summary: fetch passenger,
 *    description: new passenger will register,
 *    responses:
 *     200:
 *      description: successfull
 *     404:
 *      description: error
 */

 //post request for login

/**
 * @swagger
 *  /api/login:
 *   post:
 *    summary: passenger login,
 *    description: new passenger will register,
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#definitions/passengers'
 *    responses:
 *     200:
 *      description: successfull
 */

//swagger put request 

/**
 * @swagger
 *  /api/passengers/{_id}:
 *   put:
 *    summary: update passenger
 *    description: passenger will update the details
 *    parameters:
 *       - in : Path
 *         name: _id
 *         required: true
 *         description: ID of the booking
 *    responses:
 *     200:
 *      description: successfull
 *     404:
 *      description: error
 */

//swagger delete request

/**
 * @swagger
 *  /api/passengers/{_id}:
 *   delete:
 *    summary: update passenger
 *    description: passenger will update the details
 *    parameters:
 *       - in : Path
 *         name: _id
 *         required: true
 *         description: ID of the booking
 *    responses:
 *     200:
 *      description: successfull
 *     404:
 *      description: error
 */

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
app1.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
var server =app.listen(5000,function(){
    var host = server.address().address;
    var port = server.address().port;
})
module.exports = server;
var port = process.env.PORT || 5000; 
//app.listen(port);
console.log('Server Listening on port ' + port);
app.listen(5001);
