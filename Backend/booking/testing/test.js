const mongoose = require("mongoose");
const booking = require('../model/booking');
const bookingTicket = require('../model/bookTraindetails')

const expect=require('chai').expect;
const request=require('supertest');

const server = require('../bookingServer');
const connection=require('../database/DBconnection');
// requiring mocha and chai
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require("express");
const should = chai.should();
chai.use(chaiHttp);

describe('Booking API',()=>{
  describe('GET /books', () => {
    it('it should GET all the booked details', function() {
     chai.request(server)
          .get('/books')
          .end((err, res) => {
               res.should.have.status(200);
               res.body.should.be.a('array');
               //res.body.length.should.be.eq(3);
               //res.text.should.be.eq("Testing here!!")
           // done();
          });
   });
   it('it should NOT GET all the booked details', (done) => {
     chai.request(server)
         .get('/api/book')
         .end((err, res) => {
               res.should.have.status(404);
           done();
         });
  });
});
});

//adding booking details
describe("post for books",()=>{
    it("POST Adding trains details ",(done)=>{
            const response =request(server).post("/books")
            .send({
                passengerID:"13215ad2244a",
                passengerID:"13215ad2245a" ,
                paymentDone:"YES",
            }).then(response=>{
                expect(response.statusCode).to.be.equal(200);                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     })
  })
// this testcase contail incorrect url
  describe("searching the trains",()=>{
    it("POST Adding trains details ",(done)=>{
            const response =request(server).post("/api/book")
            .send({
              passengerID:"13215ad2244a",
              passengerID:"13215ad2245a" ,
              paymentDone:"YES", 
            }).then(response=>{
                expect(response.statusCode).to.be.equal(404);                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     })
  })

//url is incorrect for search the train
describe("details view on the booked ticket ",()=>{
  it("Do not details view on the booked ticket and geting the status 404 ",(done)=>{
          const response =request(server).post("/api/savedBookTickets")
          .send({
            train_name:"NGP EXPRESS",
            from:"Nagpur",
            to:"Pune", 
            fare:1200,  
          }).then(response=>{
              expect(response.statusCode).to.be.equal(404);                
              done()
          })
          .catch((err)=>{
              console.log(err);
              throw(err);
          }) 
   })
})
//fetching the particular booking according to id
describe('update particular booking details',function(){
    it('update should respond 200',function(done){
      request(server).put("/reservation/:id"+server._id).expect(201).end(done);
    })
  })
  //do not update a particular booking because this case test has wrong path/url api/book/:id
  describe('Do not fetch the particular booking detail',function(){
    it('GET should respond 404',function(done){
      request(server).put("/api/reservation/:id"+server._id).expect(404).end(done);
    })
  })
  describe('Booking API',()=>{
    describe('GET', () => {
      it('it should GET all the booked details according to payment', function() {
       chai.request(server)
            .get('/bookpayment/:paymentDone'+server.paymentDone)
            .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 //res.body.length.should.be.eq(3);
                 //res.text.should.be.eq("Testing here!!")
             // done();
            });
     });
     it('it should NOT GET all the booked details', (done) => {
       chai.request(server)
           .get('/api/book')
           .end((err, res) => {
                 res.should.have.status(404);
             done();
           });
    });
  });
  });