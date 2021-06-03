var express = require('express');
const Booking = require('../model/booking');
var router = express.Router();

//get request
 
router.get('/booking',function(req, res) {
    Booking.find(function(err, booking) {
        if (err)
            res.send(err);

        res.json(booking);
    });
});

//post request for booking data
router.post('/booking',(req, res)=>{
    var reg=new Booking();
    reg.train_name=req.body.train_name;
    reg.number_of_seats=req.body.number_of_seats;
    reg.from=req.body.from;
    reg.to=req.body.to;
    reg.booking_date=req.body.booking_date;
    reg.book=req.body.book;
    console.log("inside reg post");
    // Output to the console for testing
    console.log(reg);
   reg.save(function(err) {
    if (err)
    {
        console.log("testing rest1");
        res.send(err);
    }
    else
    {
        console.log("no issue");
        res.send('new booking detail is added to the database');
    }
});
});
router.use('/api', router);
module.exports = router;