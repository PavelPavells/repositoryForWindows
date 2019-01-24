const express     = require('express');
const bodyParser  = require('body-parser');
const session     = require('express-session');
const passport    = require('passport');
const mongo       = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectID;
const LocalStrategy = require('passport-local');
module.exports = function (app, db) { 
  function ensureAuthenticated(req, res, next) {
          if (req.isAuthenticated()) {
              return next();
          }
          res.redirect('/');
        };
  app.route('/auth/github')
          .get(passport.authenticate('github'),(req,res) => { 
  });   
  app.route('/auth/github/callback')
  .get(passport.authenticate('github', { failureRedirect: '/' }), (req,res) => { 
    res.redirect('/profile'); 
  });
        /**/
       /* */
        app.route('/')
          .get((req, res) => {
            res.render(process.cwd() + '/views/pug/index');
          });
        app.route('/profile')
          .get(ensureAuthenticated, (req, res) => {
               res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'login', showLogin: true, showRegistration: true});
          });
        app.route('/logout')
          .get((req, res) => {
              req.logout();
              res.redirect('/');
          });
        app.use((req, res, next) => {
          res.status(404)
            .type('text')
            .send('Not Found');
        });
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }