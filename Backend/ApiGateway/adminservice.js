var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'http://localhost:7000'
const api = apiAdapter(BASE_URL)

//Fetching all train details 
router.get('/TrainDetails', (req, res) => {
  console.log("in trainsdetails");
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

//for adminlogin
router.post('/adminlogin', (req, res) => {
  console.log("in adminlogin");
  api.post(req.path).then(resp => {
    res.send(resp.data)
  })
})

//for adminRegister

router.post('/adminRegister', (req, res) => {
  console.log("API GATEWAY : In adminRegister  ");
  api.post(req.path).then(resp => {
    res.send(resp.data)
  })
})

//to addTrains

router.post('/addTrains', (req, res) => {
  console.log("API GATEWAY : In addTrains  ");
  api.post(req.path).then(resp => {
    res.send(resp.data)
  })
})

//for search train on the basis of from and to

router.post('/search', (req, res) => {
  console.log("API GATEWAY : In search train  "+req.body.from+": "+req.body.to+" path "+req.path);
  api.post(req.path).then(resp => {
    res.json(resp.data)
  })
})

//fetching detail according to booking id

router.get('/booking/:id', (req, res) => {
  console.log("API GATEWAY : In booking/:id  ");
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

// fetching train details according to train id

router.get('/train/:_id', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})



module.exports = router