var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'http://localhost:8000'
const api = apiAdapter(BASE_URL)

router.post('/postingpayment', (req, res) => {
    console.log("API GATEWAY : saved book ticket");
    api.post(req.path).then(resp => {
      res.json(resp.data)
    })
  })
  
  //fetching booking details according to id
  router.get('/paymentdetails', (req, res) => {
      console.log("in trainsdetails");
      api.get(req.path).then(resp => {
        res.send(resp.data)
      })
    })
    
    module.exports = router