'use strict';
var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
var dbConnection;
function connectToDb() {
  if (!dbConnection) {
    dbConnection = MongoClient.connect(process.env.DB, { useNewUrlParser: true });
  }
  return dbConnection;
}
module.exports = function (app) {
  app.route('/api/threads/:board')
    .delete((req, res, next) => {
      var { board } = req.params;
      var { delete_password, thread_id } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          db.collection('boards').updateOne(
            { board },
            {
              $pull: {
                threads: {
                  _id: ObjectId(thread_id),
                  delete_password,
                },
              },
            },
          )
            .then((doc) => (doc.result.nModified === 0)
              ? res.send('incorrect password')
              : res.send('success')
            )
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .get((req, res, next) => {
      var { board } = req.params;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          db.collection('boards').findOne({ board })
            .then((board) => {
              if (board === null) {
                return res.send([]);
              }
              var { threads: allThreads } = board;
              var threads = allThreads
                .sort((a, b) => a.bumped_on - b.bumped_on)
                .slice(0, 10)
                .map((thread) => {
                  var {
                    bumped_on, created_on, _id, replies, text,
                  } = thread;
                  return {
                    bumped_on,
                    created_on,
                    _id,
                    replies: replies.reverse().slice(0, 3),
                    replycount: replies.length,
                    text,
                  };
                });
              return res.send(threads);
            })
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .post((req, res, next) => {
      var { board } = req.params;
      var { delete_password, text } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          var _id = new ObjectId();
          var created_on = new Date();
          var bumped_on = created_on;
          var reported = false;
          var replies = [];
          var thread = {
            bumped_on, created_on, delete_password, _id, replies, reported, text
          };
          db.collection('boards').findOneAndUpdate(
            { board },
            { $push: { threads: thread } },
            { upsert: true },
          )
            .then(() => res.redirect(`/b/${board}`))
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .put((req, res, next) => {
      var { board } = req.params;
      var { thread_id } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          db.collection('boards').findOneAndUpdate(
            { board, 'threads._id': ObjectId(thread_id) },
            { $set: { 'threads.$.reported': true } },
          )
            .then((doc) => (doc.value === null)
              ? res.send('thread id not found')
              : res.send('success')
            )
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    });
  app.route('/api/replies/:board')
    .delete((req, res, next) => {
      var { board } = req.params;
      var { delete_password, reply_id, thread_id } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          db.collection('boards').updateOne(
            { board },
            { $set: { 'threads.$[thread].replies.$[reply].text': '[deleted]' } },
            { arrayFilters: [
              { 'thread._id': ObjectId(thread_id) },
              {
                'reply.delete_password': delete_password,
                'reply._id': ObjectId(reply_id),
              }
            ]},
          )
            .then((doc) => (doc.result.nModified === 0)
              ? res.send('incorrect password')
              : res.send('success'))
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .get((req, res, next) => {
      var { board } = req.params;
      var { thread_id } = req.query;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          db.collection('boards').findOne({ board })
            .then(board => {
              var thread = board.threads.find(
                thread => String(thread._id) === thread_id);
              var {
                bumped_on, created_on, _id, replies, text,
              } = thread;
              return res.json({
                bumped_on, created_on, _id, replies, replycount: replies.length, text,
              });
            })
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .post((req, res, next) => {
      var { board } = req.params;
      var { delete_password, thread_id, text } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          var reply_id = new ObjectId();
          var created_on = new Date();
          var bumped_on = created_on; // for the thread; all other vars for the reply
          var reported = false;
          var reply = {
            created_on, delete_password, _id: reply_id, reported, text,
          };
          db.collection('boards').findOneAndUpdate(
            { board, 'threads._id': ObjectId(thread_id) },
            { $push: { 'threads.$.replies': reply } },
          )
          .then(() => res.redirect(`/b/${board}/${thread_id}`))
          .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .put((req, res, next) => {
      var { board } = req.params;
      var { reply_id, thread_id } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('message-board');
          db.collection('boards').updateOne(
            { board },
            { $set: { 'threads.$[thread].replies.$[reply].reported': true } },
            { arrayFilters: [
              { 'thread._id': ObjectId(thread_id) },
              { 'reply._id': ObjectId(reply_id) },
            ]},
          )
            .then((doc) => (doc.result.nModified === 0)
              ? res.send('reply id or thread id not found')
              : res.send('success')
            )
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    });
};