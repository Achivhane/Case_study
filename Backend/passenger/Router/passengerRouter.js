var express = require('express');
var router = express.Router();
const Passenger = require('../model/passenger');
const Ticket =require('../model/ticket');
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../createToken");


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

// get request 
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

//get request

 
router.get('/passengers',function(req, res) {
    Passenger.find(function(err, passenger) {
        if (err)
        {
            console.log("error while getting passengers "+ err);
            res.send(err);
        }
        else
        {
            console.log("successfully getting passengers "+ passenger);
            res.json(passenger);
        }
        });
      

        
});

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


//read the data from client application and match with Modal
router.post("/users/registration", expressAsyncHandler(async (req,res)=>{
   console.log("registration "+req.body.email);
    const user = new Passenger({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    try{
        const createdUser = await user.save();
        res.status(200).json({
            _id :  createdUser._id,
            name : createdUser.name,
            email : createdUser.email,
            msg :"success",
            token : generateToken(createdUser)
        })
    }catch(error){
        res.status(200).json({
            msg :"Error",
            token : generateToken(createdUser)
        })
        console.log("exception occured in registration ",error)
    }
   

    
}));

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
            });
           // res.status(200).json(1);
        }else{
            res.status(401).json({"message":"invalid password"});
        }
    }else{
        res.status(401).json({"message":"invalid email or password"})
    }
}));

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
        res.status(400).send(err);
        console.log("error inside");
    } else{
	res.status(200).send('Successfully! Employee updated - '+found.name);
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

router.post("/ticketSaved", expressAsyncHandler(async (req,res)=>{
    console.log("registration "+req.body.email);
    var ticket=new Ticket();
    ticket.train_name=req.body.train_name;
    ticket.from=req.body.from;
    ticket.to=req.body.to;
    ticket.fare=req.body.fare;
    ticket.date=req.body.date;
    ticket.time=req.body.arrival_time;
    ticket.pname=req.body.name;
     const storedTicket = await ticket.save();
 }));

 router.get('/getticket',  function(req, res) {
    Ticket.find(function(err, ticket) {
        if (err){
console.log("error"+err)
            res.send(err);
        }else{
console.log("ticket"+ticket)
        res.json(ticket);
        }
    });
});
router.use('/api', router);
module.exports = router;
