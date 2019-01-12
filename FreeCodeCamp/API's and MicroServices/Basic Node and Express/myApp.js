
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
app.use(function middleware(req, res, next) {
var string = req.method + ' ' + req.path + ' - ' + req.ip;
res.send(string);
console.log(string);
next();
});

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
app.get('/', function (req, res) {
  res.send('Hello Express')
});

/** 3) Serve an HTML file */
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html");        
});

/** 4) Serve static assets  */
app.use(express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */
app.get('/json', (req, res) => {
 


/** 6) Use the .env file to configure the app */
let data = {"message": "Hello json"};

app.get('/json', function (req,res) {

    if(process.env.MESSAGE_STYLE==="uppercase"){
      data.message = data.message.toUpperCase();
    }
 return res.json(data);
});
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get('/now', function(req,res, next){
  next();
}, function(req, res){
 var time = new Date().toString();
  console.log('time'+time);
  res.json({'time': time});
});

/** 9)  Get input from client - Route parameters */
//app.get('/:echo/echo', function(req, res) {
  //res.json(req.params);
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.route('/name').get((req, res) => {
   var first = req.query.first;
   var last = req.query.last;
   var jsonObj = {name: first + ' ' + last};
   res.send(jsonObj);
}).post();
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

/** 12) Get data form POST  */
app.post('/name', function(req, res) {
  var firstName = req.body.first;
  var lastName = req.body.last;
  res.send({"name": `${firstName} ${lastName}`});
});


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = myApp;
