module.exports = function (sequelize, Sequelize) {
    var rol = require('./rol');
    var Rol = new rol(sequelize, Sequelize);
    //cuenta
    var cuenta = require('./cuenta');
    var Cuenta = new cuenta(sequelize, Sequelize);
    var Persona = sequelize.define('persona', {
        idPersona: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        external_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        nombre: {
            type: Sequelize.STRING(50)
        },
        apellido: {
            type: Sequelize.STRING(50)
        },
        direccion: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING(10)
        },
        email: {
            type: Sequelize.STRING
        }
    }, {freezeTableName: true,
        createdAt: 'fechaRegistro',
        updatedAt: 'fechaMoodicacion'});

    Persona.belongsTo(Rol, {
        foreignKey: 'idRol'
    });
    Persona.belongsTo(Cuenta, {
        foreignKey: 'idCuenta'
    });
    
    Persona.associate= function (models){
        models.persona.hasMany(models.reserva_cancha, {
            foreignKey:'idPersona'});
    };
    return Persona;
};

