'use strict';
var models = require('../models');
var Horario = models.horario;

class reservaController {
    verHorario(req, res) {
        Horario.findAll({}).then(function (horario) {
            res.render('index', { titulo: 'Calva&Calva', partial: 'partials/frm_reserva', lista: horario});
            console.log(horario);
        }).catch(function (err) {
            
        });
    }
}

module.exports = reservaController;

