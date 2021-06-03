var express = require('express');
var router = express.Router();
var Admin = require('../model/admin');


// get request for trains details
router.get('/TrainDetails',function(req, res) {
    Admin.find(function(err, details) {
        if (err)
            res.send(err);

        res.json(details);
    });
});

//post request for train data
router.post('/admin',(req, res)=>{
    var admin=new Admin();
    admin.train_name=req.body.train_name;
    admin.from=req.body.from;
    admin.to=req.body.to;
    admin.fare=req.body.fare;
    admin.arrival_time=req.body.arrival_time;
    admin.departure_time=req.body.departure_time;
    admin.available=req.body.available;
    console.log("inside admin post");
    // Output to the console for testing
    console.log(admin);
   
   admin.save(function(err) {
    if (err)
    {
        console.log("testing rest1");
        res.send(err);
    }
    else
    {
        console.log("no issue");
        res.send('new train detail is added to the database');
    }
});
});

router.get('/passengers/:id',(res, req)=>{
    Passenger.findById(req.params.id).then((Passenger)=>{
        if(cart){
            //make req to passengerto get id
            axios
            .get("http://localhost:5000/api/passengers" +Passenger.PassengerId)
            .then((response)=>{
                var data ={
                    name:response.data.name,
                    email:response.data.email,
                    password:response.data.password
                }
                res.json(data);
                console.log(data);
            });
        }else{
            res.send("invalid product");
                }
    });
});
router.use('/api', router);
module.exports = router;