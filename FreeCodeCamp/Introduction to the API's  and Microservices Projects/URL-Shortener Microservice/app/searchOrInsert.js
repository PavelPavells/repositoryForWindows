"use strict";
const mongo = require("mongodb").MongoClient;
const db_url = process.env.accessKey || require("./data.js").url;
let database = null;
let link_coll = null;
const rndmKey = function (url,adder) {
    //  Calculate the length of the shorthand
    let length = Math.floor((url.length - 5) / 3) + adder;
        length = length < 2 ? 2 : length;
    //  from stores the characters for my shorthand
    const from = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const x = from.length;
    //  Now push <length> random chars from <from> to the shorthand
    let sh = "https://shortthis.herokuapp.com/";
    while(length--) sh += from[Math.floor(Math.random() * x)];
    // Check if we somehow created an already existing shorthand
    return link_coll.findOne({shorthandURL: sh})
                    .then(doc => {
                        // If we created an unique shorthand, return it
                        if (doc === null) return sh;
                        // Else: we created an existing shorthand => create a new, increase adder
                        else return rndmKey(url,adder + 1);
                    });
};
const searchOrInsert = function (prot,url) {
    const orig = prot + "//" + url;
    return mongo.connect(db_url)
        .then(db => {
            database = db;
            return db.collection("links");
        })
        //  First, check if the original url is already in the database
        .then(links => {
          link_coll = links; 
            return links.findOne(
                                {originalURL: orig,},
                                {_id: 0, originalURL: 1, shorthandURL: 1}
                                );
        })
        .then(doc => {
            // If we found an already existing shorthand, return it;
            if (doc !== null) return doc;
            // Else create a new shorthand, insert a new document to the database and return this document;
            else {
                return rndmKey(url,0).then(shorthand =>
                    link_coll.insert({
                                    "originalURL": orig,
                                    "shorthandURL": shorthand
                                    })
                    )
                    .then(writeResult => {
                        return  {
                                "originalURL":  writeResult.ops[0].originalURL,
                                "shorthandURL": writeResult.ops[0].shorthandURL
                                };
                    });
            }
        })
        .then(result => {
            database.close();
            return result;
        });       
};
module.exports = searchOrInsert;