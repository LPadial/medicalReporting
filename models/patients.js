var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var patientSchema = new Schema({
    id:       { type: Number },
    name:     { type: String },
    surname:  { type: String },
    nhc:      { type: Number },
    telephone:{ type: Number },
    age:      { type: Number },
    ssnumber: { type: Number },
    gender:   { type: String, enum:
    ['Male', 'Female', 'Trasgender']
        },
    admission:{ type: String },
    birthday: { type: String },
    room:     { type: Number },
    address:  { type: String },
    bed:      { type: Number },
    reason:   { type: String },
    diseases: { type: String }
});

module.exports = mongoose.model('Patients', patientSchema);