var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'http://localhost:8086'
const api = apiAdapter(BASE_URL)


// for booking the ticket
router.post('/booking', (req, res) => {
  console.log("API GATEWAY : Booking");
  api.post(req.path).then(resp => {
    res.send(resp.data)
  })
})

//for saving the booked ticket
router.post('/savedBookTicket', (req, res) => {
  console.log("API GATEWAY : saved book ticket");
  api.post(req.path).then(resp => {
    res.json(resp.data)
  })
})

//fetching booking details according to id
router.get('/booking/:id', (req, res) => {
    console.log("in trainsdetails");
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  //fetch the booking details according to payment done or not 
  router.get('/bookpayment/:paymentDone', (req, res) => {
    console.log("in trainsdetails");
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  // fetch the booked ticket which payment equal to yes
  router.get('/books', (req, res) => {
    console.log("in trainsdetails");
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

//updating booking details according to id
router.put('/reservation/:id', (req, res) => {
  console.log("API GATEWAY : In booking/:id  ");
  api.put(req.path).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router