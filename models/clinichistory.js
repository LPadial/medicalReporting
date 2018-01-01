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

historySchema.pre('validate', function (next) {
  if (this.initDateMedication > this.finalDateMedication) {
    this.invalidate('initDateMedication', 'La fecha final debe ser posterior a la fecha inicial.', this.initDateMedication);
  }

  next();
});

module.exports = mongoose.model('ClinicHistory', historySchema);
