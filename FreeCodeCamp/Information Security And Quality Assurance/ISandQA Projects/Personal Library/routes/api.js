'use strict';
var expect = require('chai').expect;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var dbConnection;
function connectToDb() {
  if (!dbConnection) {
    dbConnection = MongoClient.connect(process.env.DB, { useNewUrlParser: true });
  }
  return dbConnection;
}
module.exports = function (app) {
  app.route('/api/books')
    .get(function (req, res, next) {
      connectToDb()
        .then((client) => {
          var db = client.db('personal-library');
          db.collection('books').find().toArray()
            .then(books => {
              res.send(books.map((book) => {
                var { _id, title, comments } = book;
                return { _id, title, commentcount: comments.length };
              }))
            })
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .post(function (req, res, next) {
      if (!Object.prototype.hasOwnProperty.call(req.body, 'title')) {
        return res.send('missing title');
      }
      var { title } = req.body;
      connectToDb()
        .then((client) => {
          var db = client.db('personal-library');
          db.collection('books').insertOne({ title, comments: [] })
            .then(doc => res.json(doc.ops[0]))
            .catch(err => Promise.reject(err));
        })
        .catch(next);
    })
    .delete(function(req, res, next) {
      connectToDb()
        .then((client) => {
          var db = client.db('personal-library');
          db.collection('books').deleteMany({ })
            .then(() => res.send('complete delete successful'))
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    });
  app.route('/api/books/:id')
    .get(function (req, res, next) {
      connectToDb()
        .then((client) => {
          var db = client.db('personal-library');
          db.collection('books').findOne({ _id: ObjectId(req.params.id) })
            .then((doc) => doc === null ? res.send('no book exists') : res.json(doc))
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .post(function(req, res, next) {
      connectToDb()
        .then((client) =>  {
          var db = client.db('personal-library');
          db.collection('books').findOneAndUpdate(
            { _id: ObjectId(req.params.id) },
            { $push: { comments: req.body.comment } },
            { returnOriginal: false }
          )
            .then((doc) => (
              doc.value === null ? res.send('no book exists') : res.json(doc.value)
            ))
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    })
    .delete(function(req, res, next) {
      connectToDb()
        .then((client) => {
          var db = client.db('personal-library');
          db.collection('books').findOneAndDelete({ _id: ObjectId(req.params.id) })
            .then((doc) => (
              doc.value === null ? res.send('no book exists') : res.send('delete successful')
            ))
            .catch((err) => Promise.reject(err));
        })
        .catch(next);
    });
};