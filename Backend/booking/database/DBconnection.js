var mongoose = require('mongoose');

//name of the database
const mongodbURL='mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/booking2?retryWrites=true&w=majority'

try{
    //connect to mongodb 
    mongoose.connect(mongodbURL,{useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true},
        ()=>console.log(" connected with DB"));
    }
    catch(err){
        console.log("could not connect");
    }