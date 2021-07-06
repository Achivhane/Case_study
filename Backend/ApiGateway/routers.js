var express = require('express');
var router = express.Router()
var adminservice = require('./adminservice')
var pasengerservice = require('./passengerservice')
var bookingservice = require('./bookingservice')
var paymentservice = require('./paymentservice')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})


router.use(bookingservice)
router.use(paymentservice)
router.use(adminservice)
router.use(pasengerservice)

module.exports = router