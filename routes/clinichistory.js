var express = require('express');
var clinicHistoryController = require('../controllers/clinichistory');

var api = express.Router();
var md_checkLogin = require('../middlewares/authenticated');

api.route('/clinichistory')
  .get(md_checkLogin.ensureAuth, clinicHistoryController.findAllClinicHistorials)
  .post(md_checkLogin.ensureAuth, clinicHistoryController.addClinicHistory);

api.route('/clinichistory/:id')
  .get(md_checkLogin.ensureAuth, clinicHistoryController.findById)
  .put(md_checkLogin.ensureAuth, clinicHistoryController.updateClinicHistory)
  .delete(md_checkLogin.ensureAuth, clinicHistoryController.deleteClinicHistory);

module.exports = api;
