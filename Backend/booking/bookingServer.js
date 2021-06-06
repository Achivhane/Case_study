const express= require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const axios = require("axios")
const cors =require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/booking2?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 

mongoose.set('useFindAndModify',false);
require('./model/booking');
const Booking=mongoose.model('Booking');
app.use(bodyParser.json());

//const booking=require('./Router/bookingRouter')
//app.use(booking);

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


app.listen(8086,()=>{
    console.log("passenger service up and working");
  });
