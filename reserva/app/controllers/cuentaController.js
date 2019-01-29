'use strict';
class cuentaController {
    registrar(req, res) {
        res.render('login', {
            titulo: 'Registrar Usuario',
            partial: 'partials/frm_registro',
            error: req.flash("cedula_repetida")
        });
    }
    sesion(req, res) {
        res.render('login', {
            titulo: 'Iniciar Sesion',
            partial: 'partials/frm_sesion',
            error: req.flash("err_cred")
        });
    }
}

module.exports = cuentaController;