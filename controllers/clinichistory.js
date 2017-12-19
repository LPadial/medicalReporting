//File: controllers/clinichistory.js
var mongoose = require('mongoose');
var ClinicHist  = mongoose.model('ClinicHistory');

//GET - Return all clinic historials in the DB
exports.findAllNHC = function(req, res) {
	ClinicHist.find(function(err, nhcs) {
    if(err) res.send(500, err.message);

    console.log('GET /nhcs')
		res.status(200).jsonp(nhcs);
    });
};

    //GET - Return a patients with specified ID
exports.findById = function(req, res) {
	ClinicHist.findById(req.params.nhc, function(err, nhcs) {
    if(err) return res.send(500, err.message);

    console.log('GET /nhcs/' + req.params.nhc);
		res.status(200).jsonp(nhcs);
	});
};

//POST - Insert a new nhc in the DB
exports.addPatient = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var nhcs = new ClinicHist({
		nhc:        req.body.nhc,
        name: 	    req.body.year,
        medication: {
            description:    req.body.medication.description,
            breakfast:  {
                cuantity:   req.body.medication.breakfast.cuantity    
            }
        
        
        
        },
		surname:    req.body.country,
		nhc:        req.body.poster,
		telephone:  req.body.seasons,
		age:        req.body.genre,
        ssnumber:   req.body.summary,
        gender:     req.body.gender,
        admission:  req.body.admission,
        birthday:   req.body.birthday,
        room:       req.body.room,
        address:    req.body.address
	});

    nhcs.save(function(err, nhcs) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(nhcs);
	});
};

//PUT - Update a register already exists
exports.updatePatient = function(req, res) {
	ClinicHist.findById(req.params.nhc, function(err, nhcs) {
		nhcs.id          =   req.body.title,
		nhcs.name        = 	req.body.year,
		nhcs.surname     =   req.body.country,
		nhcs.nhc         =   req.body.poster,
		nhcs.telephone   =   req.body.seasons,
		nhcs.age         =   req.body.genre,
        nhcs.ssnumber    =   req.body.summary,
        nhcs.gender      =   req.body.gender,
        nhcs.admission   =   req.body.admission,
        nhcs.birthday    =   req.body.birthday,
        nhcs.room        =   req.body.room,
		nhcs.address     =   req.body.address,
		nhcs.bed         =   req.body.bed,
		nhcs.reason      =   req.body.reason,
		nhcs.diseases     =   req.body.diseases,

		nhcs.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(nhcs);
		});
	});
};

//DELETE - Delete a Patient with specified ID
exports.deletePatient = function(req, res) {
	ClinicHist.findById(req.params.nhc, function(err, nhcs) {
		nhcs.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};