"use strict";
const mongo = require("mongodb").MongoClient;
const db_url = process.env.DB_URL || require("./credentials.js").DB_URL;
let database = null;
const open = function () {
     return mongo.connect(db_url)
            .then(db => {
                database = db;
                return db.collection("searches");
            });
};
const insert = function (searchString, date) {
    open().then(coll => {
        coll.insert({
            "term": searchString,
            "date": date,                                   // We use the String representation from Google Response
            "timestamp": new Date(date).getTime() / 1000,   // Seconds since 1. January 1970 00:00:00 UTC
        });
        database.close();
    });
};
const history = function () {
    return  open()
            .then(coll => {
                return coll.find({},{_id: 0})       // Get all searches
                           .sort({timestamp: -1})   // Sort them new -> to
                           .limit(10)               // return only the last 10
                           .toArray();
            })
            .then(arr => {
                database.close();
                return arr;
            });
};
module.exports = {
    insert: insert,
    history: history,
};