var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'http://localhost:5000'
const api = apiAdapter(BASE_URL)

//fetching passengers details

router.get('/passengers', (req, res) => {
  console.log("in passenger details api gateway");
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

// for registration
router.post('/users/registration', (req, res) => {
  console.log("API GATEWAY : Registration "+req.body.email);
  api.post(req.path).then(resp => {
    res.send(resp.data)
  })
})

//for signin 
router.post('/users/signin', (req, res) => {
  console.log("API GATEWAY : In login ");
  api.post(req.path).then(resp => {
    res.json(resp.data)
  })
})

//updating passenger according to id
router.put('/passengers/:id', (req, res) => {
  console.log("API GATEWAY : In booking/:id  ");
  api.put(req.path).then(resp => {
    res.send(resp.data)
  })
})
module.exports = router