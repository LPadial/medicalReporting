var express = require('express');
var patientsController = require('../controllers/patient');

var api = express.Router();

api.route('/patients')
  .get(patientsController.findAllPatients)
  .post(patientsController.addPatient);

api.route('/patients/:id')
  .get(patientsController.findById)
  .put(patientsController.updatePatient)
  .delete(patientsController.deletePatient);

module.exports = api;
