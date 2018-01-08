var express = require('express');
var nfcController = require('../controllers/nfc');

var api = express.Router();
var md_checkLogin = require('../middlewares/authenticated');

api.route('/nfc')
.post(md_checkLogin.ensureAuth, nfcController.addNFC);

api.route('/nfc/:id')
.get(md_checkLogin.ensureAuth, nfcController.findById);

api.route('/nfcDoctor')
.get(md_checkLogin.ensureAuth, nfcController.findNFCDoctor);

api.route('/nfcs')
.get(md_checkLogin.ensureAuth, nfcController.findAllNfcs);


module.exports = api;
