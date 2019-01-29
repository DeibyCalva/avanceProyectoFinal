module.exports = function (sequelize, Sequelize) {
    var Cuenta = sequelize.define('cuenta', {
        idCuenta: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        cedula: {
            type: Sequelize.STRING(10)
        },
        external_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        clave: {
            type: Sequelize.STRING
        }
    }, {timestamps: false,
        freezeTableName: true
    });
    Cuenta.associate= function (models){
        models.cuenta.hasOne(models.persona, {
            foreignKey:'idCuenta'});
    };
    return Cuenta;
};

