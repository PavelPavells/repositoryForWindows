"use strict";
const mongo = require("mongodb").MongoClient;
const db_url = process.env.accessKey || require("./data.js").url;
const searchSH = function(shorthand) {
    return mongo.connect(db_url)
        .then((db) => {
            const links = db.collection("links");
            return links.findOne(
                                {shorthandURL: "https://shortthis.herokuapp.com/" + shorthand,},
                                {_id: 0, originalURL: 1, shorthandURL: 1}
                                );
        })
        .then((doc) => {
            if (doc !== null) return doc;
            else throw new Error("The searched shorthand wasn't found in the database");
        });
};
module.exports = searchSH;