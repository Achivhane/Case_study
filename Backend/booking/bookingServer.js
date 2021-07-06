const express= require('express');
//const app=express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const axios = require("axios")
const cors =require('cors');
//importing db connection
const connection = require('./database/DBconnection')
//importing swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
var app = express();
//enable the cors
app.use(cors()); 

mongoose.set('useFindAndModify',false);
require('./model/booking');
const Booking=mongoose.model('Booking');
//MIME type---->it is used to communicate with the client
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//defining the options of swaggwer
const swaggerOption={
  swaggerDefinition:{
      openapi:'3.0.0',
      info:{
          title:'express API for booking',
          version:'1.0.0',
          contact:{
              author:"asmita",
          },
          server:["http://localhost:8086"]
      },
     
  },
  apis:["bookingServer.js"]
  }
  const swaggerDocs =swaggerJsDoc(swaggerOption);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(express.json());
// schema declaration/definition
/**
* @swagger
* definitions:
*  booking:
*   type: object
*   properties:
*    passengerID:
*     type: object
*     description: passenger id
*     example: 
*    trainID:
*     type: object
*     description: train id
*     example: 
*    bookedDate:
*     type: date
*     description: booking date
*     example: 
*    paymentDone:
*     type: boolean
*     description: payment is done or not
*     example: 
*/

// swagger get request 
/**
* @swagger
*  /:
*   get:
*    summary: fetch booking
*    description: fetching all booking
*    responses:
*     200:
*      description: successfull
*     404:
*      description: error
*/

/**
 * @swagger
 *  /books:
 *   post:
 *    summary: post booking
 *    description: post booking
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#definitions/booking'
 *    responses:
 *     200:
 *      description: successfull
 */
// swagger get request by id
/**
* @swagger
*  /booking/{_id}:
*   get:
*    summary: fetch particular booking by id
*    description: fetch particular booking by id
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
// swagger get request by paymentDone
/**
* @swagger
*  /bookpayment/{paymentDone}:
*   get:
*    summary: fetch booking by payment,
*    description: fetch booking by payment
*    parameters:
*       - in : Path
*         name: _id
*         required: true
*         description: paymentDone
*    responses:
*     200:
*      description: successfull
*     404:
*      description: error
*/

// swagger get request 
/**
* @swagger
*  /books:
*   get:
*    summary: fetch booking,
*    description: fetching all booking
*    responses:
*     200:
*      description: successfull
*     404:
*      description: error
*/
//swagger put request 

/**
 * @swagger
 *  /booking/{_id}:
 *   put:
 *    summary: update booking
 *    description: fetch particular booking and update
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
app.get('/',(req,res)=>
{
  console.log(req);
    res.send("This is booking service"); 
})

app.post('/books',(req,res)=>
{

  var newBooks={
    trainID:mongoose.Types.ObjectId(req.body.trainID),
    passengerID:mongoose.Types.ObjectId(req.body.passengerID),
      paymentDone:req.body.paymentDone
  }
 
  var books=new Booking(newBooks);
  console.log(books);
  books.save().then(()=>{
    res.send(books.id); 
    console.log("ticket booked");
  });
   
}); 

 app.get('/booking/:id',  function(req, res) {
	//console.log("id is :"+req.params.id)
    Booking.findById(req.params.id).then((booking) =>
    {
        console.log(booking)
       
       if(booking)
       {
axios.all([
  axios.get('http://localhost:5000/passengers/'+booking.passengerID),
  axios.get('http://localhost:7000/api/booking/'+booking.trainID)
])
.then(response => {
  //this will be executed only when all requests are complete
  console.log('Date created: ', response[0].data);
  console.log('Date created: ', response[1].data.trainName);

  var passengerObject ={name : response[0].data.name , email : response[0].data.email , trainName : response[1].data.train_name,from : response[1].data.from, to : response[1].data.to,fare : response[1].data.fare,booking_id:booking.id}
  res.send(passengerObject);
});
       
       }
       else{
           res.send("invalid Booking")
       }
    })
});

 app.get('/bookpayment/:paymentDone',  function(req, res) {
	console.log("paymentDone is :"+req.params.paymentDone)
    Booking.find({paymentDone:req.params.paymentDone}).then((booking) =>
    {
        console.log(booking)
       
       if(booking)
       {
       console.log("passenger id "+booking.passengerID);
       console.log(" book id"+booking.trainID);
       
axios.all([
  axios.get('http://localhost:5000/passengers/'+booking.passengerID),
  axios.get('http://localhost:7000/api/booking/'+booking.trainID)
])
.then(response => {
  console.log(response[0]);
  console.log('Date created: ', response[0].data);
  console.log('Date created: ', response[1].data.trainName);

  var passengerObject ={name : response[0].data.name , email : response[0].data.email , trainName : response[1].data.train_name,from : response[1].data.from, to : response[1].data.to,fare : response[1].data.fare,booking_id:booking.id}
  
  res.send(passengerObject);
});

       
       }
       else{
           res.send("invalid Booking")
       }
    })
});

app.get('/books',(req,res)=>
{
    Booking.find().then((books)=>{
    res.json(books); 
  });
})

app.put('/reservation/:id',function(req,res,next){
 console.log("reservataion method calling");
	var data = {
		paymentDone : "YES"
	}
    Booking.findOneAndUpdate({_id:req.params.id},data).then(function(){
        Booking.findOne({_id:req.params.id}).then(function(reserved){
            console.log("reserved")
            res.status(201).send({
                message:"Your Updated reservation details,Please find below details ",
                reserved});
        });
    });
});
var port = process.env.PORT || 8086;
//for testing 
console.log("booking server is listening on port "+port);
var server =app.listen(port,function(){
  var host = server.address().address;
  var port = server.address().port;
})
module.exports = server;
//port=8086
// app.listen(port,()=>{
//     console.log("booking server is listening on port"+port);
//   });