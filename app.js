var express  = require("express"),
    app      = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose    = require('mongoose');
var url = "mongodb://iris:c001d2002efb3@ds046037.mlab.com:46037/medical_reports";

//DB connection
mongoose.connect(url, {
    useMongoClient: true
});

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models       = require('./models/patients')(app, mongoose);
var PatientsCtrl = require('./controllers/patients');

//Express instance
var router = express.Router();

//Test node route
router.get('/', function(req, res) {
res.send("Hello World!");
});
app.use(router);

//Do before a route
router.use(function(req, res, next) {
  console.log('Something is happening.'); //For example write a logging of medics, queries, etc...
  next(); // make sure we go to the next routes and don't stop here
});

// API routes
var patients = express.Router();

patients.route('/patients')
  .get(PatientsCtrl.findAllPatients)
  .post(PatientsCtrl.addPatient);

patients.route('/patients/:id')
  .get(PatientsCtrl.findById)
  .put(PatientsCtrl.updatePatient)
  .delete(PatientsCtrl.deletePatient);

  //All routes will be under /api, eg: /api/patients
app.use('/medical_reports', patients);

//Start node server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});
