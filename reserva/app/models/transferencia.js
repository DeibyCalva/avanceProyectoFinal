module.exports = function (sequelize, Sequelize) {
    var Transferencia = sequelize.define('transferencia', {
        idTrans: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        bank: {
            type: Sequelize.STRING(50)
        }
    }, {timestamps: false,
        freezeTableName: true});
    
    Transferencia.associate= function (models){
        models.transferencia.hasOne(models.reserva_cancha, {
            foreignKey:'idTrans'});
    };
    return Transferencia;
};