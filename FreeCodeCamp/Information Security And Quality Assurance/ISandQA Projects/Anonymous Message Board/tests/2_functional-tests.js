var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var ObjectId = require('mongodb').ObjectId;
var server = require('../server');
chai.use(chaiHttp);
suite('Functional Tests', function() {
  var del_thread_id, reply_id, reply_thread_id, report_thread_id;
  suite('API ROUTING FOR /api/threads/:board', function() {
    suite('POST', function() {
      // POST 11 threads to test 10 thread limit of GET method
      for (let i = 1; i <= 11; i++) {
        test('Test POST /api/threads/:board/', function(done) {
          chai.request(server)
            .post('/api/threads/board')
            .send({ delete_password: `password${i}`, text: `text${i}` })
            .end(function(err, res) {
              assert.equal(res.status, 200);
              done();
            });
        });
      }
    });
    suite('GET', function() {
      test('Test GET /api/threads/:board', function(done) {
        chai.request(server)
          .get('/api/threads/board')
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            assert.equal(res.body.length, 10);
            assert.property(res.body[0], 'bumped_on');
            assert.property(res.body[0], 'created_on');
            assert.property(res.body[0], '_id');
            assert.isArray(res.body[0].replies);
            assert.equal(res.body[0].replies.length, 0);
            assert.equal(res.body[0].replycount, 0);
            assert.equal(res.body[0].text, 'text1');
            assert.equal(res.body[9].text, 'text10');
            del_thread_id = res.body[2]._id;
            reply_thread_id = res.body[5]._id;
            report_thread_id = res.body[7]._id;
            done();
          });
      });
    });
    suite('DELETE', function() {
      test('Test DELETE /api/threads/:board - incorrect password', function(done) {
        chai.request(server)
          .delete('/api/threads/board')
          .send({ delete_password: 'incorrect_password', thread_id: del_thread_id  })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'incorrect password');
            done();
          });
      }); 
      test('Test DELETE /api/threads/:board - correct password', function(done) {
        chai.request(server)
          .delete('/api/threads/board')
          .send({ delete_password: 'password3', thread_id: del_thread_id  })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'success');
            done();
          });
      });
    });
    suite('PUT', function() {
      test('Test PUT /api/threads/:board - thread id not in db', function(done) {
        chai.request(server)
          .put('/api/threads/board')
          .send({ thread_id: new ObjectId() })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'thread id not found');
            done();
          });
      });
      test('Test PUT /api/threads/:board - thread id in db', function(done) {
        chai.request(server)
          .put('/api/threads/board')
          .send({ thread_id: report_thread_id })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'success');
            done();
          });
      });
    });
  });
  suite('API ROUTING FOR /api/replies/:board', function() {
    suite('POST', function() {
      test('Test POST /api/replies/:board', function(done) {
        chai.request(server)
          .post('/api/replies/board')
          .send({
            delete_password: 'reply_password',
            text: 'reply',
            thread_id: reply_thread_id,
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            done();
          });
      });
    });
    suite('GET', function() {
      test('Test GET /api/replies/:board', function(done) {
        chai.request(server)
          .get('/api/replies/board')
          .query({ thread_id: reply_thread_id })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(res.body, 'bumped_on');
            assert.property(res.body, 'created_on');
            assert.equal(res.body._id, reply_thread_id);
            assert.isArray(res.body.replies);
            assert.equal(res.body.replies.length, 1);
            assert.equal(res.body.replycount, 1);
            assert.property(res.body.replies[0], 'created_on');
            assert.property(res.body.replies[0], '_id');
            reply_id = res.body.replies[0]._id;
            assert.equal(res.body.replies[0].text, 'reply');
            done();
          });
      });
    });
    suite('PUT', function() {
      test('Test PUT /api/replies/:board - reply id not in db', function(done) {
        chai.request(server)
          .put('/api/replies/board')
          .send({ reply_id: new ObjectId(), thread_id: reply_thread_id })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'reply id or thread id not found');
            done();
          });
      });
      test('Test PUT /api/replies/:board - thread id not in db', function(done) {
        chai.request(server)
          .put('/api/replies/board')
          .send({ reply_id: reply_id, thread_id: new ObjectId() })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'reply id or thread id not found');
            done();
          });
      });
      test('Test PUT /api/replies/:board - both ids in db', function(done) {
        chai.request(server)
          .put('/api/replies/board')
          .send({ reply_id: reply_id, thread_id: reply_thread_id })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'success');
            done();
          });
      });
    });
    suite('DELETE', function() {
      test('Test DELETE /api/replies/:board - incorrect password', function(done) {
        chai.request(server)
          .delete('/api/replies/board')
          .send({
            delete_password: 'incorrect_password',
            reply_id: reply_id,
            thread_id: reply_thread_id,
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'incorrect password');
            done();
          });
      });
      test('Test DELETE /api/replies/:board - correct password', function(done) {
        chai.request(server)
          .delete('/api/replies/board')
          .send({
            delete_password: 'reply_password',
            reply_id: reply_id,
            thread_id: reply_thread_id,
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'success');
            done();
          });
      });
    });
  });
});