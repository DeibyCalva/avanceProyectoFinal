module.exports = function (sequelize, Sequelize) {
    //foreign persona
    var persona = require('./persona');
    var Persona = new persona(sequelize, Sequelize);
    //foreign cancha
    var cancha = require('./cancha');
    var Cancha = new cancha(sequelize, Sequelize);
    //foreign tranferencia
    var trans = require('./transferencia');
    var Trans = new trans(sequelize, Sequelize);
    //foreign horario
    var horario = require('./horario');
    var Horario = new horario(sequelize, Sequelize);
    
    var Reserva = sequelize.define('reserva_cancha', {
        idReserva: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        tipoPago: {
            type: Sequelize.STRING(50)
        },
        valorUnitario: {
            type: Sequelize.DOUBLE(7,2)
        },
        valorTotal: {
            type: Sequelize.DOUBLE(7,2)
        },
        nroReserva: {
            type: Sequelize.INTEGER
        },
        fecha: {
            type: Sequelize.DATEONLY 
        }
    }, {timestamps: false,
        freezeTableName: true});
    
    Reserva.belongsTo(Persona, {
        foreignKey: 'idPersona'
    });
    
    Reserva.belongsTo(Cancha, {
        foreignKey: 'idCancha'
    });
    
    Reserva.belongsTo(Horario, {
        foreignKey: 'idHorario'
    });
    
    Reserva.belongsTo(Trans, {
        foreignKey: 'idTrans'
    });
    
    return Reserva;
};