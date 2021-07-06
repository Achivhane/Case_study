var mongoose = require('mongoose');

//name of the database
const mongodbURL='mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/RailWays?retryWrites=true&w=majority'

try{
    //connect to mongodb 
    mongoose.connect(mongodbURL,{useNewUrlParser: true, useUnifiedTopology:true},
        ()=>console.log(" connected with DB"));
    }
    catch(err){
        console.log("could not connect");
    }