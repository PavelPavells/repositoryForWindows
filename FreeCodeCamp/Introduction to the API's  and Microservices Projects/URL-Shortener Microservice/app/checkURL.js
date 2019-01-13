"use strict";
const checkURL = function (prot,url) {
    const orig = prot + "//" + url;
    const _prot = prot === "http:" ? require("http") : require("https");
    const _url = require("url");
    const options = {method: "HEAD", 
                     host: _url.parse(orig).host,
                     path: _url.parse(orig).pathname};
    return new Promise((resolve,reject) => {
        const handleRes = res => resolve(res.statusCode);
        const handleErr = err => {console.error("While checking the URL I got: ",err); 
                                  reject(err.code)};
        const req = _prot.request(options, handleRes);
        req.on("error", handleErr);
        req.end();
    });
};
module.exports = checkURL;