var express = require('express');
var router = express.Router();
const Passenger = require('../model/passenger');
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../createToken");

//get request
 
router.get('/passengers',function(req, res) {
    Passenger.find(function(err, passenger) {
        if (err)
            res.send(err);

        res.json(passenger);
    });
});

//post request for register data
router.post('/register',(req, res)=>{
    var reg=new Passenger();
    reg.name=req.body.name,
    reg.email=req.body.email,
    reg.password=req.body.password,
    reg.mobile_number=req.body.mobile_number,

    
    console.log("inside reg post");
   
    console.log(reg);
  
   reg.save(function(err) {
    if (err)
    {
        console.log("testing rest1"+err);
        res.send(err);
    }
    else
    {
        console.log("no issue");
        res.json('new passenger is added to the database');
    }
});
});

router.post("/users/registration", expressAsyncHandler(async (req,res)=>{
    //read the data from client application and match with Modal
    const user = new Passenger({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    const createdUser = await user.save();
    res. send({
        _id :  createdUser._id,
        name : createdUser.name,
        email : createdUser.email,
        token : generateToken(createdUser)
    })
}));


router.post("/users/signin",expressAsyncHandler(async (req,res)=>{
    const user = await Passenger.findOne({"email":req.body.email});
    console.log(user);
    console.log(" req.body.password"+req.body.password);
    console.log(" req.body.password"+req.body.password);
    if(user){
        if(req.body.password===user.password){
            console.log("into this")
            routes = "/user";
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                route:routes,
                token : generateToken(user)
            })
        }else{
            res.status(401).send({"message":"invalid password"});
        }
    }else{
        res.status(401).send({"message":"invalid email or password"})
    }
}));

//post request for login data
router.post("/login",(req, res)=>{
    var login = Passenger();
    const body=req.body
    const email=body.email
    const password = body.password
 Passenger.findOne({email:email,password:password},(err,found)=>{
      if(found){
          console.log(found);
          routes = "/search";
         res.json(1);
     }
     else{
        res.json("localhost:4200/admin");

     }
 });    
});
//put request

router.put('/passengers/:_id', function(req, res) {
	// create mongose method to update a existing record into collection
	let id = req.params._id;
	var data = {
		name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
		age : req.body.age
	}
 
	// save the user
	
    Passenger.findOneAndUpdate(id, data, function(err, found) {        
	if (err){
        res.send(err);
        console.log("error inside put");
    } else{
	res.send('Successfully! Employee updated - '+found.name);
    console.log("successful put");
    }
	});
});
//delete request

router.delete('/passengers/:_id', function(req, res) {
	console.log(req.params._id);
	let id = req.params._id;
	Passenger.deleteOne({
		_id : id
	}, function(err) {
		if (err){
            console.log("error inside delete");
			res.send(err);
        }
		else{
			res.send('Successfully! passenger has been Deleted.');
            console.log("successful delete");	
        }
	});
});
 router.get('/passengers/:id',  function(req, res) {
	console.log("id is :"+req.params.id)
	 Passenger.findById(req.params.id).then((user)=>{
        if(user){
           res.json(user);
        }else{
            res.json("invalid train id");
                }
    });

});
router.use('/api', router);
module.exports = router;
