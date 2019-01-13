"use strict";
const express = require("express");
const app = express();
const handleNew = require("./app/handleNew.js");    // Func to handle a the "new" Keyword
const handleShort = require("./app/handleShort.js");// Func to handle an given Shorthand

app.use("/", express.static("./public"));

app.get(/^\/new\//, function(req,res) {
    handleNew(req.originalUrl.slice(5)).then(       // slice(5) to remove the "/new/" from the original URL
        data => res.status(200).send(data),
        err => res.status(err.substr(0,3)).send({ERROR: err.substr(4)})
    );
});

app.get("/:shorthand", function(req,res) {
    return handleShort(req.params.shorthand).then(
        data => res.redirect(302, data.originalURL), 
        err  => res.status(404).send({ERROR: err.message})
    );
});

app.listen(process.env.PORT || 8080);