"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const upload = multer(); //From Multer Doc: In case you omit the options object, the files will be kept in memory and never written to disk.

app.use(cors());
app.use("/", express.static("./public"));

app.post("/api/fileanalyse", upload.single("upfile"), (req,res,next) => {
    res.status(200).send({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
    });
});

app.listen(process.env.PORT || 8080);