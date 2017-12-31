  var mongoose = require('mongoose'),
  Schema   = mongoose.Schema;

  var doctorSchema = new Schema({
    email: {
      type: String,
      required:true,
      unique: true
    },
    password:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required:true
    },
    speciality: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('Doctor', doctorSchema);
