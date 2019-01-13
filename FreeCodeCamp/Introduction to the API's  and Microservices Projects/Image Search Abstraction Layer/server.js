"use strict";
const express = require("express");
const app = express();
const search = require("./api/search.js");
const accessDB = require("./api/accessDB.js");
app.use("/", express.static("./public"));
app.get("/api/imagesearch/:search*", function(req,res) {
    search(req.params.search, req.query).then(
        arr => res.status(200).send(arr),
        err => res.status(400).send(err)
    );
});
app.get("/api/latest/imagesearch", function(req,res) {
    accessDB.history().then(
        arr => res.status(200).send(arr)
    );
});
app.listen(process.env.PORT || 8080);