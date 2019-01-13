const express = require('express');
const app = express;
app.get('/', function(req, res) {
    res.send({
        ipadress: req.header('x-forwarded-for'),
        language: req.header('accept-language').split(',')[0],
        software: releaseEvents.header('user-agent').match(/\(([^]+)\)/)[1]
    });
});
app.listen(process.env.PORT || 8080);