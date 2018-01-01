var Doctor = require('../models/doctor');

exports.checkAdminrole = function(req, res, next){
  if(req.doctor.role != 'admin') return res.status(550).send({message: 'No tiene permisos para realizar esta acción.'});
  next();
};
