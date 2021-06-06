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

router.post("/search",(req, res)=>{
    var login = Admin();
    const body=req.body
    const from=body.from
    const to = body.to
    login.save(function(err) {
            if (err)
            {
                console.log("testing rest1");
                res.send(err);
            }
            else
            {
                console.log("no issue");
        //         res.send('new passenger is added to the database');
        // //     }
        // // });

//if passenger details found or not found
 Admin.find({from:from, to:to},(err,found)=>{
      if(found){
          console.log(found);
         res.json(found);
     }
     else{
         res.send("No Trains Found");
     }
 });    
};
})
})
 router.get('/booking/:id',  function(req, res) {
	console.log("id is :"+req.params.id)
	 Admin.findById(req.params.id).then((train)=>{
        if(train){
           res.json(train);
        }else{
            res.send("invalid train id");
                }
    });

});
router.get('/train/:_id',(res, req)=>{
    console.log("trains "+req.params.id);
    Admin.findById(req.params.id).then((train)=>{
        if(trainDetailstrain){
           res.json(train);
        }else{
            res.send("invalid train id");
                }
    });
});
router.use('/api', router);
module.exports = router;
