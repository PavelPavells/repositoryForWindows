const parseTime = require("../app/parseTime.js");
const expect = require("chai").expect;

describe("parseTime Function", function() {
    const valid = {
        unix: 1480636800,
        natural: "December 2, 2016"
    };
    const invalid = {
        unix: null,
        natural: null,
    };
    describe("Pass a complete Natural-Language-Date", function() {
        it("should work with valid Dates", function() {
            expect(parseTime("2016-12-02")).to.deep.equal(valid);
            expect(parseTime("02-12-2016")).to.deep.equal(valid);
            expect(parseTime("December 2, 2016")).to.deep.equal(valid);
            expect(parseTime("December 2 2016")).to.deep.equal(valid);
            expect(parseTime("Dec 2, 2016")).to.deep.equal(valid);
            expect(parseTime("Dec 2 2016")).to.deep.equal(valid);
            expect(parseTime("2 December 2016")).to.deep.equal(valid);
            expect(parseTime("2 December 16")).to.deep.equal(valid);
            expect(parseTime("2 Dec 2016")).to.deep.equal(valid);
            expect(parseTime("2 Dec 16")).to.deep.equal(valid);
        });
        it("should reject complete but invalid dates", function() {
            expect(parseTime("Feb 29, 2015")).to.deep.equal(invalid);
            expect(parseTime("35 December 2016")).to.deep.equal(invalid);
            expect(parseTime("2016-04-31")).to.deep.equal(invalid);
        });
    });
    describe("Pass an incomplete Natural-Language-Date", function() {
        it("should reject incomplete inputs", function() {
            expect(parseTime("2016-12")).to.deep.equal(invalid);
            expect(parseTime("02-12-")).to.deep.equal(invalid);
            expect(parseTime("2 Dec")).to.deep.equal(invalid);
            expect(parseTime("2016 December")).to.deep.equal(invalid);
            expect(parseTime("Dec 2016")).to.deep.equal(invalid);
            expect(parseTime("2016 2")).to.deep.equal(invalid);
            expect(parseTime("December 2")).to.deep.equal(invalid);
        });
    });
    describe("Pass a Unix-Timestamp", function() {
        it("should produce a valid output when a number is passed", function() {
            expect(parseTime(1480636800)).to.deep.equal(valid);
            expect(parseTime(0)).to.deep.equal({ unix:0, natural:"January 1, 1970" });
            expect(parseTime(-1480636800)).to.deep.equal({ unix:-1480636800, natural:"January 31, 1923" });
        });
    });
})