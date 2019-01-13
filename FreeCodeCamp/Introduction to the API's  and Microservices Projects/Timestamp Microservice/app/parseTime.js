const moment = require("moment");
const formats = [
        "X",
        "YYYY-MM-D",
        "D-MM-YYYY",
        "MMMM D, YYYY",
        "MMMM D YYYY",
        "MMM D, YYYY",
        "MMM D YYYY",
        "D MMMM YYYY",
        "D MMMM YY",
        "D MMM YYYY",
        "D MMM YY",
    ];
    
const parseTime = function(input) {
    const date = moment(input,formats, true);
    const output = {
        unix: null,
        natural: null,
    };
    
    if (date.isValid()) {
        output.unix = +date.format("X");
        output.natural = date.format("MMMM D, YYYY");
    }
    
    return output;
};

module.exports = parseTime;