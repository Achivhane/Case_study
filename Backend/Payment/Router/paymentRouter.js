var express = require('express');
const Payment = require('../model/payment');
var router = express.Router();

//get request
 
router.get('/postingpayment',function(req, res) {
    Payment.find(function(err, details) {
        if (err)
            res.send(err);

        res.json(details);
    });
});
router.post("/postingpayment",(req, res)=>{
    var pay = Payment(req.body);
     console.log(pay);
     pay.save(function(err) {
            if (err)
            {
                console.log("Error occured");
                res.json(err);
            }
            else
            {
                console.log("Payment Posted Successfully");
                res.json("Tickit book successfully");
            }
        });
    });

router.use('/paymentapi', router);
module.exports = router;