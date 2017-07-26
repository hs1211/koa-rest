'use strict';
var superagent = require('supertest');
var app = require('../app');

function request() {
  return superagent(app.listen());
}

describe('Routes', function() {

  describe('GET /', function() {
    it('should return 200', function(done) {
      request()
        .get('/')
        .expect(200, done);
    });
  });

  describe('POST /add', function() {
    it('should return 200', function(done) {
       const res=request()
                  .post('/add')
                  .send({
                        title: "abc",
                        author: "xxx",
                        price: 123
                      })
                  .expect('Content-Type', /json/)
                  .expect(200, done);
         // console.log(res);        
    });
  });

  describe('GET /books/notfound', function() {
    it('should return 404', function(done) {
      request()
        .get('/books/notfound')
        .expect(404, done);
    });
  });


  jest.unmock('../app/controllers/books');

  describe('Test Mock', function() {

      it('should return add result', function (done) {
        const book=require('../app/controllers/books');
        console.log(book.addNum);
        expect(book.addNum(1,2)).toBe(3);
        done();

      });

  });

});
