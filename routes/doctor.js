var express = require('express');
var doctorsController = require('../controllers/doctor');

var api = express.Router();
var md_checkLogin = require('../middlewares/authenticated')

api.route('/doctors')
  .get(md_checkLogin.ensureAuth, doctorsController.findAllDoctors)
  .post(md_checkLogin.ensureAuth, doctorsController.addDoctor);

api.route('/doctors/:id')
  .get(md_checkLogin.ensureAuth, doctorsController.findById)
  .put(md_checkLogin.ensureAuth, doctorsController.updateDoctor)
  .delete(md_checkLogin.ensureAuth, doctorsController.deleteDoctor);

api.route('/doctors/login')
  .post(doctorsController.loginDoctor);

module.exports = api;