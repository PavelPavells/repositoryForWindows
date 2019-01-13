const express = require("express");
const app = express();
const parseTime = require("./app/parseTime.js");

app.use("/", express.static("./public"));

app.get("/:time", function (req, res) {
    const output = parseTime(req.params.time);
    res.send(JSON.stringify(output));
});

app.listen(process.env.PORT || 8080);