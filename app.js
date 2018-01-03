var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");
mongoose = require('mongoose');
//var url = "mongodb://iris:c001d2002efb3@ds046037.mlab.com:46037/medical_reports";
var url = "mongodb://localhost:27017/medical_reports";

//DB connection
mongoose.connect(url, {
  useMongoClient: true
});

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Patient routes
var patient_routes = require('./routes/patient');

// Doctor routes
var doctor_routes = require('./routes/doctor');

// Clinic History routes
var clinicHistory_routes = require('./routes/clinichistory');

// NFC routes
var nfc_routes = require('./routes/nfc');


//You can access to the routes with this links
app.use('/medical_reports', patient_routes);
app.use('/medical_reports', doctor_routes);
app.use('/medical_reports', clinicHistory_routes);
app.use('/medical_reports', nfc_routes);

//Start node server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
