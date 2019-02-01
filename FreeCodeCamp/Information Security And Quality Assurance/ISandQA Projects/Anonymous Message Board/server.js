'use strict';
var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');
var dotenv      = require('dotenv');
var helmet      = require('helmet');
var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');
dotenv.config();
var app = express();
app.use(helmet());
app.use(helmet.reffererPolicy({policy : 'same-origin'}));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({origin : '*'})); //For FCC Testing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//Sample front-end
app.route('/b/:board')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/views/board.html');
    });
app.route('/b/:board/:threadid')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/views/thread.html')
    });
//Index page(static HTML)
app.route('/')
    .get(function() {
        res.sendFile(process.cwd() + 'views/index.html');
    });
//For FCC Testing purposes
fccTestingRoutes(app);
//Routing For API
apiRoutes(app);
//Sample Front-end
//404 Not Found Middleware
app.use(function(req, res, next) {
   res.status(404)
    .type('text')
    .send('Not Found') 
});
app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port ' + process.env.PORT);
    if(process.env.NODE_ENV==='test') {
        console.log('Running tests...');
        setTimeout(function() {
            try {
                runner.run();
            } catch (e) {
                var error = e;
                console.log('Tests are not valid:');
                console.log(error);
            }
        }, 1500);
    }
});
module.exports = app; //For Testing