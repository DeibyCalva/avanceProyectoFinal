module.exports = function (sequelize, Sequelize) {
    var Horario = sequelize.define('horario', {
        idHorario: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre:{
            type: Sequelize.STRING(50)
        },
        tipoHorario: {
            type: Sequelize.BOOLEAN,
            defaultValue: true

        },
        estado: {
            type: Sequelize.BOOLEAN,
            defaultValue: true

        }
    }, {timestamps: false,
        freezeTableName: true});
    
    Horario.associate= function (models){
        models.horario.hasOne(models.reserva_cancha, {
            foreignKey:'idHorario'});
    };
    return Horario;
};