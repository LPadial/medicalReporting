var express = require('express');
var patientsController = require('../controllers/patient');

var api = express.Router();
var md_checkLogin = require('../middlewares/authenticated');

api.route('/patients')
.get(md_checkLogin.ensureAuth, patientsController.findMyPatients)
.post(md_checkLogin.ensureAuth, patientsController.addPatient);

api.route('/patients/:id')
.get(md_checkLogin.ensureAuth, patientsController.findById)
.put(md_checkLogin.ensureAuth, patientsController.updatePatient)
.delete(md_checkLogin.ensureAuth, patientsController.deletePatient);

api.route('/patientsRoom/:room')
.get(md_checkLogin.ensureAuth, patientsController.findMyPatientsRoom);

api.route('/patientsRfid/:code_rfid')
.get(md_checkLogin.ensureAuth, patientsController.findPatientByRfid)
.put(md_checkLogin.ensureAuth, patientsController.updateRoomRfid);


module.exports = api;
