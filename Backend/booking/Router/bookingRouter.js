var express = require('express');
const Booking = require('../model/booking');
const BookTrainDetails=require('../model/bookTraindetails')

var router = express.Router();
const axios = require("axios");

router.get('/',(req,res)=>
{
  console.log(req);
    res.send("This is booking service"); 
})

router.post('/books',(req,res)=>
{

  var newBooks={
    trainID:mongoose.Types.ObjectId(req.body.trainID),
    passengerID:mongoose.Types.ObjectId(req.body.passengerID),
      paymentDone:req.body.paymentDone
  }
 
  var books=new Booking(newBooks);
  console.log(books);
  books.save().then(()=>{
    res.status(200).send(books.id); 
    console.log("ticket booked");
  });
   
}); 

router.post('/savedBookTicket',(req,res)=>
{

  var newBooks={
  train_name=req.body.train_name,
  to:req.body.to,
  from:req.body.from,
  fare:req.body.fare
  }
 
  var books=new BookTrainDetails(newBooks);
  console.log(books);
  books.save().then(()=>{
    res.status(200).send(books.id); 
    console.log("ticket booked");
  });
   
}); 

 router.get('/booking/:id',  function(req, res) {
	console.log("in the booking"+req.body);
    Booking.findById(req.params.id).then((booking) =>
    {
        console.log("in the booking"+booking)
       
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
  res.status(200).send(passengerObject);
});
       
       }
       else{
           res.status(404).send("invalid Booking")
       }
    })
});

 router.get('/bookpayment/:paymentDone',  function(req, res) {
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
  
  res.status(200).send(passengerObject);
});

       
       }
       else{
           res.status(200).send("invalid Booking")
       }
    })
});

router.get('/books',(req,res)=>
{
    Booking.find().then((books)=>{
    res.json(books); 
  });
})

router.put('/reservation/:id',function(req,res,next){
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



module.exports = router;
