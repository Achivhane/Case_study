const mongoose = require("mongoose");
const Passenger = require('../model/passenger');

const expect=require('chai').expect;
const request=require('supertest');

const server = require('../passengerServer');
const connection=require('../database/DBconnection');
// requiring mocha and chai
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require("express");
const should = chai.should();
chai.use(chaiHttp);
let token="";

 describe('Passenger API',()=>{
   describe('GET /passengers', () => {
     it('it should GET all the passengers details', function() {
      chai.request(server)
           .get('/api/passengers')
           .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                //res.body.length.should.be.eq(3);
                //res.text.should.be.eq("Testing here!!")
            // done();
           });
    });
    it('it should NOT GET all the passengers details', (done) => {
      chai.request(server)
          .get('/api/passengerssss')
          .end((err, res) => {
                res.should.have.status(404);
            done();
          });
   });
 });
});

describe("user",()=>{
  it("user register successfully",(done)=>{
          const response =request(server).post("/api/users/registration")
          .send({
              name:"asmitacx",
              email:"asasaad@gmail.com",
              password:"hu1vxccx",
              mobile_number:8600774394
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
describe("user",()=>{
  it("user register not successful",(done)=>{
          const response =request(server).post("/api/user/registration")
          .send({
              name:"asmitacx",
              email:"asasaad@gmail.com",
              password:"hu1vxccx",
              mobile_number:8600774394
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

describe("when the password Wrong",()=>{
    it("password mismatch should give 401 status code",(done)=>{
            const response =request(server).post("/api/users/signin")
            .send({
                password:"asdfghjklza"
            }).then(response=>{
                expect(response.statusCode).to.be.equal(401);                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     })
})

describe("when email and password is given wrong",()=>{
    it("gives token with auth failed message and status code set to 401",(done)=>{
            const response =request(server).post("/api/users/signin")
            .send({
                email:"abcadas@gmail.com",
                password:"abdcas1234",
            }).then(response=>{
                expect(response.statusCode).to.be.equal(401); 
                this.token=response.body.token                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     });
})

describe("when email and password is given correct",()=>{
  it("gives token with auth success message and status code set to 200",(done)=>{
          const response =request(server).post("/api/users/signin")
          .send({
            email:"asasaad@gmail.com",
            password:"hu1vxccx",
          }).then(response=>{
              expect(response.statusCode).to.be.equal(200); 
              this.token=response.body.token                
              done()
          })
          .catch((err)=>{
              console.log(err);
              throw(err);
          }) 
   });
})
describe("when email and password is given correct",()=>{
  it("gives token with auth success message and status code set to 200",(done)=>{
          const response =request(server).post("/api/users/signin")
          .send({
            email:"asmita@gmail.com",
            password:"asmita",
          }).then(response=>{
              expect(response.statusCode).to.be.equal(401); 
              this.token=response.body.token                
              done()
          })
          .catch((err)=>{
              console.log(err);
              throw(err);
          }) 
   });
})
//for delete a particular passenger
describe('delete the particular passenger',function(){
  it('DELETE should respond 200',function(done){
    request(server).del("/api/passengers/:id"+server._id).expect(200).end(done);
  })
})
//do not delete a particular passenger because this case test has wrong path/url api/passenger/:id
describe('Do not delete the particular passenger',function(){
  it('DELETE should respond 404',function(done){
    request(server).del("/api/passenger/:id"+server._id).expect(404).end(done);
  })
})
//update the particular passenger according to id
describe('update the particular passenger',function(){
  it('PUT should respond 200',function(done){
    request(server).put("/api/passengers/:id"+server._id).expect(200).end(done);
  })
})
//do not update a particular passenger because this case test has wrong path/url api/passenger/:id
describe('Do not update the particular passenger',function(){
  it('PUT should respond 404',function(done){
    request(server).put("/api/passenger/:id"+server._id).expect(404).end(done);
  })
})