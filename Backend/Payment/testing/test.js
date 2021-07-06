const mongoose = require("mongoose");
const Admin = require('../model/payment');

const expect=require('chai').expect;
const request=require('supertest');

const server = require('../paymentServer');
const connection=require('../database/DBconnection');
// requiring mocha and chai
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require("express");
const should = chai.should();
chai.use(chaiHttp);
let token="";

 describe('Payment API',()=>{
   describe('GET /postingpayment', () => {
     it('it should GET all the payment details', function() {
      chai.request(server)
           .get('/paymentapi/postingpayment')
           .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                //res.body.length.should.be.eq(3);
                //res.text.should.be.eq("Testing here!!")
            // done();
           });
    });
    it('it should NOT GET all the Train details', (done) => {
      chai.request(server)
          .get('/paymentapi/postingpayments')
          .end((err, res) => {
                res.should.have.status(404);
            done();
          });
   });
 });
});

describe("Payment",()=>{
  it("POST payment successful",(done)=>{
          const response =request(server).post("/paymentapi/postingpayment")
          .send({
            payment:1200,
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
//url ---->/api/user/registration is given wrong
describe("Payment API",()=>{
  it("POST payment not successful",(done)=>{
          const response =request(server).post("/paymentapi/postingpayments")
          .send({
              payment:1200,
          }).then(response=>{
            console.log("status code :"+response.status)
              expect(response.statusCode).to.be.equal(404);                
              done()
          })
          .catch((err)=>{
              console.log(err);
              throw(err);
          }) 
   })
})
