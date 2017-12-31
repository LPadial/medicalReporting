//File: controllers/doctor.js
var mongoose = require('mongoose');
var Doctors  = require('../models/doctor');
var bcrypt = require('bcrypt');
var jwt = require('../services/jwt');

//POST - Insert a new doctor in the DB
exports.addDoctor = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var doctor = new Doctors({
		email : req.body.email,
		password : req.body.password,
		name : req.body.name,
		surname : req.body.surname,
		speciality : req.body.speciality
	});

	if(req.body.password){
		bcrypt.hash(req.body.password, 5, (err, hash) =>{
			if(err) return res.status(500).send(err.message);
			doctor.password = hash;
			doctor.save(function(err) {
				if(err) return res.status(500).send(err.message);
				res.status(200).jsonp(doctor);
			});
		});
	}
};

//PUT - Update a register already exists
exports.updateDoctor = function(req, res) {
	Doctors.findById(req.params.id, function(err, doctor) {
		doctor.email = req.body.email;
		doctor.name = req.body.name;
		doctor.surname = req.body.surname;
		doctor.speciality = req.body.speciality;

		if(req.body.password){
			bcrypt.hash(req.body.password, 5, (err, hash) =>{
				if(err) return res.status(500).send(err.message);
				doctor.password = hash;
				doctor.save(function(err) {
					if(err) return res.status(500).send(err.message);
					res.status(200).jsonp(doctor);
				});
			});
		}
	});
};

//DELETE - Delete a doctor with specified ID
exports.deleteDoctor = function(req, res) {
	Doctors.remove({ _id: req.params.id }, function (err) {
		if(err) return res.status(500).send(err.message);
		res.status(200).send("El doctor ha sido borrado.");
	});
};

//GET - Return all doctors in the DB
exports.findAllDoctors = function(req, res) {
	Doctors.find(function(err, doctors) {
		if(err) res.send(500, err.message);

		console.log('GET /doctors')
		res.status(200).jsonp(doctors);
	});
};

//GET - Return a doctor with specified ID
exports.findById = function(req, res) {
	Doctors.findById(req.params.id, function(err, doctor) {
		if(err) return res.send(500, err.message);

		console.log('GET /doctor/' + req.params.id);
		res.status(200).jsonp(doctor);
	});
};

//LOGIN
exports.loginDoctor = function(req, res) {
	var email = req.body.email;
	var password = req.body.password;

	Doctors.findOne({email: email.toLowerCase()}, (err, doctor) =>{
		if(err){
			res.status(500).send({message: 'Email o contraseña incorrectos'});
		}else{
			if(!doctor){
				res.status(404).send({message: 'Email o contraseña incorrectos'});
			}else{
				bcrypt.compare(password, doctor.password, function(err,check){
					if(check){
						if(req.body.gethash == 'true'){
							//Devolver un token de jwt
							res.status(200).send({
								token: jwt.createToken(doctor)
							});
						}else{
							res.status(200).send({doctor});
						}
					}else{
						res.status(404).send({message: 'Email o contraseña incorrectos'});
					}
				});
			}
		}
	});

}
