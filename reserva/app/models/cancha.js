module.exports = function (sequelize, Sequelize) {
    var Cancha = sequelize.define('cancha', {
        idCancha: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nroCancha: {
            type: Sequelize.INTEGER

        },
        estado: {
            type: Sequelize.BOOLEAN,
            defaultValue: true

        },
        valorDia: {
            type: Sequelize.DOUBLE(7, 2)
        },
        valorNoche: {
            type: Sequelize.DOUBLE(7, 2)
        }
    }, {timestamps: false,
        freezeTableName: true});

    Cancha.associate = function (models) {
        models.cancha.hasMany(models.reserva_cancha, {
            foreignKey: 'idCancha'});
    };
    return Cancha;
};