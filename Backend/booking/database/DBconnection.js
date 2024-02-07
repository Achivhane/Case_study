var mongoose = require('mongoose');

//name of the database
const mongodbURL='mongodb+srv://admin:admin@cluster0.lphttf9.mongodb.net/Railways_Booking?retryWrites=true&w=majority'

// try{
//     //connect to mongodb 
//     mongoose.connect(mongodbURL,{useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true},
//         ()=>console.log(" connected with DB"));
//     }
//     catch(err){
//         console.log("could not connect");
//     }
var db = mongoose.connect(mongodbURL,{useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true }, function(error){
    if(error) console.log("error while db connection in booking",error);

        console.log("connection successful in booking");
});