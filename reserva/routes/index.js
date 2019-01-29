var express = require('express');
var router = express.Router();
var passport = require('passport');
//cuenta
var cuenta= require('../app/controllers/cuentaController');
var cuentaController= new cuenta();
//horario
var horario= require('../app/controllers/horarioController');
var horarioController= new horario();
//horario
var reserva= require('../app/controllers/reservaController');
var reservaController= new reserva();

/* GET home page. */
router.get('/', reservaController.verHorario);

//Inicio y registro
router.get('/iniciar_sesion', cuentaController.sesion);
router.get('/registrar', cuentaController.registrar);
router.post('/registrar', passport.authenticate('local-signup', {
    successRedirect: '/iniciar_sesion',
    failureRedirect: '/registrar'
}));
router.post('/iniciar_sesion', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/iniciar_sesion'
}));

//Reserva
router.get('/reserva', reservaController.verHorario);
//Horario
router.get('/horario', horarioController.verHorario);


module.exports = router;
