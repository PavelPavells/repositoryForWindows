"use strict";
const api_key = process.env.API_KEY || require("./credentials.js").API_KEY;
const cse_id = process.env.CSE_ID || require("./credentials.js").CSE_ID;
const https = require("https");
const accessDB = require("./accessDB.js");
const search = function(str, options) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cse_id}&searchType=image&q=${str}&start=${options.offset || 1}`;
    return new Promise((resolve,reject) => {
        const req = https.get(url, res => {
            // When the search was successful, insert the string and time into the DB, no waiting needed
            accessDB.insert(str,res.headers.date);
            res.setEncoding("utf8");
            let compl = "";
            res.on("data", chunk => compl += chunk);
            res.on("end", () => {
                // We have all the data, now do what needs to be done!
                const obj = JSON.parse(compl);
                if (res.statusCode != 200) {
                    reject({msg: "Our Request was not successful! We got the following response from Google:",
                            google_response: obj,});
                }
                else if (obj.searchInformation.totalResults == 0) {
                    resolve({msg: "No results were found for '" + str + "'"});
                }
                else {
                    const arr = [];
                    for(let i = 0; i < obj.items.length; i++) {
                        let item = obj.items[i];
                        arr.push({
                            snippet: item.snippet,
                            imageURL: item.link,
                            siteURL: item.image.contextLink,
                            thumbnail: item.image.thumbnailLink,
                        });
                    }
                    resolve(arr);
                }
            });
        });
        req.on("error", err => {
            reject({msg: "Something went wrong while making the Google-Request",
                    error: err,});
        });
        req.end();
    });
};
module.exports = search;