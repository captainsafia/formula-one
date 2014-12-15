var expect = require('chai').expect;

var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
mockgoose(mongoose);

var Resume = require("../models/resume");
var searchByMajor = require("../routes/search").searchByMajor;

beforeEach(function(done) {
	mockgoose.reset();
	Resume.create({
		education: [{
			institution: "Northwestern University",
			major: "Computer Science",
			year: "Freshman",
			startDate : new Date(2014, 09, 25),
			endDate: new Date(2018, 06, 26),
			GPA: 3.96
		}]
	}, function(error, user) {
		if (error) {
			throw error;
		}
		done();
	});
});

describe("Resume", function() {
	describe("#searchByMajor", function() {
		it("should return an empty JSON object if nothing is found", function() {
			expect(searchByMajor("Clowning")).to.not.be.ok();
		});
		it("should return a JSON object if something is found", function () {
			expect(searchByMajor("Computer Science")).to.be.ok();
		})
	});
});