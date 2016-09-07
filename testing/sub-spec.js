const chai = require('chai');
const supertest=require('supertest')

const app = require('../app')
const should = chai.should();
const api = supertest(app);


describe('Sending a post to /api/sub',()=>{
  describe('Should succeed ', ()=>{
    it('in subtracting two number ',(done)=>{
      api.post('/api/sub')
      .send({
        num1: 5,
        num2: 2
      })
      .expect(200)
      .end((err,res)=>{
        if(err) return done(err);
        res.body.result.should.be.equal(3);
        done();
      })
    })
    describe('should fail',() =>{
      it('when the nothing is sent in ', (done)=>{
        api.post('/api/sub')
        .expect(432)
        .end((err,res)=>{
          if(err)return done (err);
          res.body.message.should.be.equal('no data fool');
          done();
        })
      })
    })
  })
})
