'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var expect = require('chai').expect;
var cors = require('cors');
const helmet = require('helmet');
var apiRoutes = require(./routes/api.js);
var fccTestingRoutes = require('./routes/fcctesting.js');
var runner = require('./test-runner.js');

var app = express();

app.use(helmet.noSniff());
app.use(helmet.xssFilter())

// app.use(helmet.hidePoweredBy({setTo:'PHP 4.2.0'}));

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//index page (static HTML)
app.route('/')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    })

//For FCC Testing purposes
fccTestingRoutes(app);

//Routing for API
apiRoutes(app);

//404 Not Found Middleware
app.use(function(req, res, next) {
    res.status(404)
        .type('text')
        .send('Not Found');
});
// Start this server and tests!
app.listen(process.env.PORT || 3000, function() {
    console.log("Listening on port" + process.env.PORT);
    if(process.env.NODE_env==='test') {
        console.log('Running tests...');
        setTimeout(function() {
            try {
                runner.run();
            } catch (error) {
                var error = e;
                console.log('Tests are not valid:');
                console.log(error);
            }
        }, 1500);
    }
});