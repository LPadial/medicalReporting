var express = require('express');
var doctorsController = require('../controllers/doctor');

var api = express.Router();

api.route('/doctors')
  .get(doctorsController.findAllDoctors)
  .post(doctorsController.addDoctor);

api.route('/doctors/:id')
  .get(doctorsController.findById)
  .put(doctorsController.updateDoctor)
  .delete(doctorsController.deleteDoctor);

api.route('/doctors/login')
  .post(doctorsController.loginDoctor);

module.exports = api;
