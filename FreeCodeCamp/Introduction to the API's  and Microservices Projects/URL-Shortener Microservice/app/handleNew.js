"use strict";
const _url = require("url");
const checkURL = require("./checkURL.js");
const searchOrInsert = require("./searchOrInsert.js");
const handle = function(origURL) {
    const parsed = _url.parse(origURL); 
    const prot = parsed.protocol;
    const url = parsed.host + parsed.path;
    return new Promise((resolve,reject) => {
        const sendError = (code,msg) => reject(code + "_" + msg);
        if (!/^(http|https):\/\/www\..+/.test(origURL)) return sendError(400,"Your URL does not start with 'http(s)://www.'");
        // Check if the URL exists
        checkURL(prot,url).then(
            code => {
                //  Our URL exists, so go and create a shorthand (or check if it already exists);
                if (code >= 200 || code < 400) searchOrInsert(prot,url).then(data => resolve(data));
                //  We got an response from the URL, but somehow it was an Error
                else sendError(400, "There was an error while checking the given URL, got the following codeNr: " + code);
            }, 
            //  If the URL does not existing, an error is thrown
            err => sendError(404, "The URL you use does not exist, got Error: " + err)
        );
    });
};
module.exports = handle;