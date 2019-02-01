var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');
var ObjectId = require('mongodb').ObjectId;
chai.use(chaiHttp);
suite('Functional Tests', function() {
  /*
  * ----[EXAMPLE TEST]----
  * Each test should completely test the response of the API end-point including response status code!
  */
  test('#example Test GET /api/books', function(done){
     chai.request(server)
      .get('/api/books')
      .end(function(err, res){
        assert.equal(res.status, 200);
        assert.isArray(res.body, 'response should be an array');
        assert.property(res.body[0], 'commentcount', 'Books in array should contain commentcount');
        assert.property(res.body[0], 'title', 'Books in array should contain title');
        assert.property(res.body[0], '_id', 'Books in array should contain _id');
        done();
      });
  });
  /*
  * ----[END of EXAMPLE TEST]----
  */
  suite('Routing tests', function() {
    var id;
    suite('POST /api/books with title => create book object/expect book object', function() {
      test('Test POST /api/books with title', function(done) {
        chai.request(server)
          .post('/api/books')
          .send({ title: 'Title'})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.title, 'Title');
            assert.isArray(res.body.comments);
            assert.property(res.body, '_id');
            id = res.body._id;
            done();
          });
      });
      test('Test POST /api/books with no title given', function(done) {
        chai.request(server)
          .post('/api/books')
          .send({ })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'missing title');
            done();
          });
      });
    });
    suite('GET /api/books => array of books', function(){  
      test('Test GET /api/books',  function(done){
        chai.request(server)
          .get('/api/books')
          .end(function(err, res) {
            assert.equal(res.status, 200);
            done();
          });
      });          
    });
    suite('GET /api/books/[id] => book object with [id]', function(){   
      test('Test GET /api/books/[id] with id not in db',  function(done){
        chai.request(server)
          .get(`/api/books/${String(ObjectId())}`)
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'no book exists');
            done();
          });
      });     
      test('Test GET /api/books/[id] with valid id in db',  function(done){
        chai.request(server)
          .get(`/api/books/${id}`)
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body._id, id);
            assert.equal(res.body.title, 'Title');
            assert.isArray(res.body.comments);
            done();
          });
      });
    });
    suite('POST /api/books/[id] => add comment/expect book object with id', function(){
      test('Test POST /api/books/[id] with comment', function(done){
        chai.request(server)
          .post(`/api/books/${id}`)
          .send({
            comment: 'Comment'
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body._id, id);
            assert.equal(res.body.title, 'Title');
            assert.deepEqual(res.body.comments, ['Comment']);
            done();
          });
      });
      test('Test POST /api/books/[id] with comment with id not in db', function(done) {
        chai.request(server)
          .post(`/api/books/${String(ObjectId())}`)
          .send({
            comment: 'Comment'
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'no book exists');
            done();
          });
      });
    });
    suite('DELETE /api/books/[id] => text', function() {
      test('Test DELETE /api/books/[id] with id not in db', function(done) {
        chai.request(server)
          .delete(`/api/books/${String(ObjectId())}`)
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'no book exists');
            done();
          });
      });
      test('Test DELETE /api/books/[id] with valid id in db', function(done) {
        chai.request(server)
          .delete(`/api/books/${id}`)
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'delete successful');
            done();
          });
      });
    });
    suite('DELETE /api/books => text', function() {
      test('Test DELETE /api/books', function(done) {
        chai.request(server)
          .delete('/api/books')
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'complete delete successful');
            done();
          });
      });
    });
  });
});