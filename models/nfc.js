var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var nfcSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  room:{
    type: String,
    required: true
  },
  time: {
    type: Date
  }
});

module.exports = mongoose.model('NFC', nfcSchema);
