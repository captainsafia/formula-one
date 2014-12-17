var expect = require('chai').expect;

var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
mockgoose(mongoose);

var Resume = require("../models/resume");
var User = require("../models/user");
var searchByMajor = require("../routes/search").searchByMajor;

beforeEach(function(done) {
	mockgoose.reset();
	var john = User.create({
		name: "John Doe",
		email: "johndoe@email.com",
		year: "Freshman",
		university: "Northwestern University",
		major: "Computer Science",
		international: false,
		epic: false,
	});
	Resume.create({
		user: john._id, 
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
		it("should return an empty array if nothing is found", function(done) {
			searchByMajor("Clowning", function(resume) {
				expect(resume).to.be.empty;
				done();
			})
		});
		it("should return a array if something is found", function (done) {
			searchByMajor("Computer Science", function(resume) {
				expect(resume).to.not.be.empty;
				done();
			})
		})
	});
	describe("#searchByName", function() {
		it("should return an empty array if nothing is found", function(done) {
			searchByName("Steve Smith", function(resume) {
				expect(resume).to.be.empty;
				done();
			});
		});
		it("should return an array if something is found", function(done) {
			searchByName("John Doe", function(resume) {
				expect(resume).to.not.be.empty;
				done();
			});
		});
		it("should return an array if only the first name is given", function(done) {
			searchByName("John", function(resume) {
				expect(resume).to.not.be.empty;
				done();
			});
		});
		it("should return an array if only the last name is given", function(done) {
			searchByName("Doe", function(resume) {
				expect(resume).to.not.be.empty;
				done();
			});
		});
	});
});