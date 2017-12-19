var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var nhcSchema = new Schema({
nhc:      { type: Number },
medication: [{
    description: String,
    breakfast: {
        cuantity: Number
    },
    lunch: {
        cuantity: Number
    },
    dinner: {
        cuantity: Number
    },
    sleep: {
        cuantity: Number
    },
    indications: String,
    initDate: String,
    finalDate: String,
    isActive: Boolean
}],
allergies:{ type : Array , "default" : []  },
records: [{
    medical: [{type: String, default: ""}],
    surgery: [{type: String, default: ""}]
}]
});

module.exports = mongoose.model('ClinicHistory', nhcSchema);