var mongoose = require('mongoose');
var Nfcs  = require('../models/nfc');
var moment = require('moment');

//POST - Insert a new nfc in the DB
exports.addNFC = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var nfc = new Nfcs({
		doctor : req.body.doctor,
		room : req.body.room,
		time: moment().unix()
	});

	nfc.save(function(err, nfc) {
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(nfc);
	});
};

//GET - Return a nfc with specified ID
exports.findById = function(req, res) {
	Nfcs.findById(req.params.id, function(err, nfc) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(nfc);
	});
};

//GET - Return doctor's nfc
exports.findNFCDoctor = function(req, res) {
	Nfcs.find({'doctor': req.doctor.id}, function(err, nfc) {
		if(err) res.send(500, err.message);
		res.status(200).jsonp(nfc);
	});
};
