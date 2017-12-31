var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String
  },
  telephone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{3}/.test(v) || /\d{3}-\d{2}-\d{2}-\d{2}/.test(v) || /\d{9}/.test(v);
      },
      message: '{VALUE} no es un número de teléfono válido!'
    },
    required: [true, 'Debe escribir un número de teléfono']
  },
  gender: {
    type: String,
    enum: ['Hombre', 'Mujer', 'Transgénero'],
    required: true
  },
  nhc: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ClinicHistory'
    }
  ],
  ssnumber: {
    type: Number,
    required:true
  },
  diseases: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return (v != null && v != "");
      },
      message: 'El paciente debe ingresar por alguna enfermedad.'
    }
  },
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    }
  ]
});

module.exports = mongoose.model('Patient', patientSchema);
