//File: controllers/clinichistory.js
var mongoose = require('mongoose');
var ClinicHist  = require('../models/clinichistory');

//POST - Insert a new clinic history in the DB
exports.addClinicHistory = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var clinicHistory = new ClinicHist({
		descriptionMedication: req.body.descriptionMedication,
		indicationMedication: req.body.indicationMedication,
		initDateMedication: req.body.initDateMedication,
		finalDateMedication: req.body.finalDateMedication,
		allergies: req.body.allergies
	});

	clinicHistory.save(function(err, clinicHistory) {
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(clinicHistory);
	});
};

//PUT - Update a register already exists
exports.updateClinicHistory = function(req, res) {
	ClinicHist.findById(req.params.id, function(err, clinicHistory) {
		clinicHistory.descriptionMedication = req.body.descriptionMedication,
		clinicHistory.indicationMedication = req.body.indicationMedication,
		clinicHistory.initDateMedication = req.body.initDateMedication,
		clinicHistory.finalDateMedication = req.body.finalDateMedication,
		clinicHistory.allergies = req.body.allergies,

		clinicHistory.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(clinicHistory);
		});
	});
};

//DELETE - Delete a clinic history with specified ID
exports.deleteClinicHistory = function(req, res) {
	ClinicHist.remove({ _id: req.params.id }, function (err) {
		if(err) return res.status(500).send(err.message);
		res.status(200).send("El historial clínico ha sido borrado.");
	});
};

//GET - Return all clinic historials in the DB
exports.findAllClinicHistorials = function(req, res) {
	ClinicHist.find(function(err, clinicHistory) {
		if(err) res.send(500, err.message);

		console.log('GET /clinichistory')
		res.status(200).jsonp(clinicHistory);
	});
};

//GET - Return a clinic history with specified ID
exports.findById = function(req, res) {
	ClinicHist.findById(req.params.id, function(err, clinicHistory) {
		if(err) return res.send(500, err.message);

		console.log('GET /clinichistory/' + req.params.id);
		res.status(200).jsonp(clinicHistory);
	});
};
