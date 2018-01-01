var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var historySchema = new Schema({
  descriptionMedication: {
    type: String
  },
  indicationMedication: {
    type: String
  },
  initDateMedication: Date,
  finalDateMedication: Date,
  allergies: {
    type : [String]
  }
});

module.exports = mongoose.model('ClinicHistory', historySchema);
