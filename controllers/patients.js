//File: controllers/patients.js
var mongoose = require('mongoose');
var Patients  = mongoose.model('Patients');


//GET - Return all patients in the DB
exports.findAllPatients = function(req, res) {
	Patients.find(function(err, patients) {
    if(err) res.send(500, err.message);

    console.log('GET /patients')
		res.status(200).jsonp(patients);
    });
};

    //GET - Return a patients with specified ID
exports.findById = function(req, res) {
	Patients.findById(req.params.id, function(err, patients) {
    if(err) return res.send(500, err.message);

    console.log('GET /patients/' + req.params.id);
		res.status(200).jsonp(patients);
	});
};

//POST - Insert a new TVShow in the DB
exports.addPatient = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var patient = new Patients({
		id:         req.body.id,
		name: 	    req.body.name,
		surname:    req.body.surname,
		nhc:        req.body.nhc,
		telephone:  req.body.telephone,
		age:        req.body.age,
        ssnumber:   req.body.ssnumber,
        gender:     req.body.gender,
        admission:  req.body.admission,
        birthday:   req.body.birthday,
        room:       req.body.room,
		address:    req.body.address,
		bed:    	req.body.bed,
		reason:   	req.body.reason,
		diseases:	req.body.diseases
	});

	patient.save(function(err, patient) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(patient);
	});
};

//PUT - Update a register already exists
exports.updatePatient = function(req, res) {
	Patients.findById(req.params.id, function(err, patient) {
		patient.id          =   req.body.id,
		patient.name        = 	req.body.name,
		patient.surname     =   req.body.surname,
		patient.nhc         =   req.body.nhc,
		patient.telephone   =   req.body.telephone,
		patient.age         =   req.body.age,
        patient.ssnumber    =   req.body.ssnumber,
        patient.gender      =   req.body.gender,
        patient.admission   =   req.body.admission,
        patient.birthday    =   req.body.birthday,
        patient.room        =   req.body.room,
		patient.address     =   req.body.address,
		patient.bed         =   req.body.bed,
		patient.reason      =   req.body.reason,
		patient.diseases     =   req.body.diseases,

		patient.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(patient);
		});
	});
};

//DELETE - Delete a Patient with specified ID
exports.deletePatient = function(req, res) {
	Patients.findById(req.params.id, function(err, patient) {
		patient.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};