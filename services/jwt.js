var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '4+Md#67%q4J{5.J4:Gb5vHuyK';

exports.createToken = function(doctor){
  var payload = {
    id: doctor._id,
    name: doctor.name,
    surname: doctor.surname,
    email: doctor.email,
    password: doctor.password,
    speciality: doctor.speciality,
    role: doctor.role,
    initTime: moment().unix(),
    expireTime: moment().add(30, 'days').unix()
  };
  return jwt.encode(payload, secret);
};
