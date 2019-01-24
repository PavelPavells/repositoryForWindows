'use strict';

const express     = require('express');
const session     = require('express-session');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const auth        = require('./app/auth.js');
const routes      = require('./app/routes.js');
const mongo       = require('mongodb').MongoClient;
const cookieParser= require('cookie-parser')
const passport    = require('passport');
const sessionStore= new session.MemoryStore();
const app         = express();
const http        = require('http').Server(app);
const io          = require('socket.io')(http);
const passportSocketIo = require("passport.socketio");

const GitHubStrategy = require('passport-github').Strategy;

fccTesting(app); //For FCC testing purposes

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  key: 'express.sid',
  store: sessionStore,
}));


mongo.connect(process.env.DATABASE,{ useNewUrlParser: true }, (err, db) => {
    if(err) {
        console.log('Database error: ' + err);
    } else {
//         auth(app, db);
      app.route('/register')
  .post((req, res, next) => {
      db.collection('users').findOne({ username: req.body.username }, function (err, user) {
          if(err) {
              next(err);
          } else if (user) {
              res.redirect('/');
          } else {
              db.collection('users').insertOne(
                {username: req.body.username,
                 password: req.body.password},
                (err, doc) => {
                    if(err) {
                        res.redirect('/');
                    } else {
                        next(null, user);
                    }
                }
              )
          }
      })},
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
        res.redirect('/profile');
    }
);
    routes(app, db);
   
  io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,
    key:          'express.sid',
    secret:       process.env.SESSION_SECRET,
    store:        sessionStore
}));
http.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);       
}); 
var currentUsers = 0; 
      io.on('connection', socket => {
        console.log('A user has connected');
        currentUsers++;
        io.emit('user', {name: socket.request.user.name, currentUsers, connected: true});
        //io.emit('user count', function(data) {
        //  console.log(data);
        //});
        socket.on('disconnect', user => {
          io.emit('disconnect', user);
          console.log(socket.name + 'has left chat.');
        });
      });
      //start socket.io code  
   //   io.on('connection', (socket) => {  
    //         ++currentUsers;
    //       console.log('user ' + socket.request.user.name + ' connected');
    //  io.emit('user count', {name: socket.request.user.name, currentUsers, connected: true});
    //       socket.on('chat message', (message) => {
     //   io.emit('chat message', {name: socket.request.user.name, message});
     // });
     //      socket.on('disconnect', () => {
     //   --currentUsers;
      //  io.emit('user count', currentUsers);
      //});
         /*socket.on('disconnect', (user) => {
        io.emit('disconnect', user);
        console.log(socket.name + ' has left the chat.');
    });*/
//console.log('user ' + socket.request.user.name + ' connected')
   // });
}});
