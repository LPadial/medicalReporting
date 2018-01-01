//File: controllers/patient.js
var mongoose = require('mongoose');
var Patients  = require('../models/patient');

//POST - Insert a new patient in the DB
exports.addPatient = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var patient = new Patients({
		name: 	    	req.body.name,
		surname:    	req.body.surname,
		dateOfBirth: 	req.body.dateOfBirth,
		address:    	req.body.address,
		telephone:  	req.body.telephone,
		gender:     	req.body.gender,
		nhc:        	req.body.nhc,
		ssnumber:   	req.body.ssnumber,
		diseases:			req.body.diseases,
		doctors:  		req.body.doctors
	});

	patient.save(function(err, patient) {
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(patient);
	});
};

//PUT - Update a register already exists
exports.updatePatient = function(req, res) {
	Patients.findById(req.params.id, function(err, patient) {
		patient.name = req.body.name;
		patient.surname = req.body.surname;
		patient.dateOfBirth = req.body.dateOfBirth;
		patient.address = req.body.address;
		patient.telephone = req.body.telephone;
		patient.gender = req.body.gender;
		patient.nhc = req.body.nhc;
		patient.ssnumber =	req.body.ssnumber;
		patient.diseases = req.body.diseases;
		patient.doctors = req.body.doctors;

		patient.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(patient);
		});
	});
};

//DELETE - Delete a Patient with specified ID
exports.deletePatient = function(req, res) {
	Patients.remove({ _id: req.params.id }, function (err) {
		if(err) return res.status(500).send(err.message);
		res.status(200).send("El paciente ha sido borrado.");
	});
};

//GET - Return all patients in the DB
exports.findAllPatients = function(req, res) {
	Patients.find(function(err, patients) {
		if(err) res.send(500, err.message);

		console.log('GET /patients')
		res.status(200).jsonp(patients);
	});
};

//GET - Return a patient with specified ID
exports.findById = function(req, res) {
	Patients.findById(req.params.id, function(err, patients) {
		if(err) return res.send(500, err.message);

		console.log('GET /patients/' + req.params.id);
		res.status(200).jsonp(patients);
	});
};
