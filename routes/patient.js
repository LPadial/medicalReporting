var express = require('express');
var patientsController = require('../controllers/patient');

var api = express.Router();
var md_checkLogin = require('../middlewares/authenticated');

api.route('/patients')
  .get(md_checkLogin.ensureAuth, patientsController.findAllPatients)
  .post(md_checkLogin.ensureAuth, patientsController.addPatient);

api.route('/patients/:id')
  .get(md_checkLogin.ensureAuth, patientsController.findById)
  .put(md_checkLogin.ensureAuth, patientsController.updatePatient)
  .delete(md_checkLogin.ensureAuth, patientsController.deletePatient);

module.exports = api;
