module.exports = function (sequelize, Sequelize) {
    var Rol = sequelize.define('rol', {
        idRol: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING(50)
        }
    }, {timestamps: false,
        freezeTableName: true});
    
    Rol.associate = function (models) {
        models.rol.hasMany(models.persona, {
            foreignKey: 'idRol'});
    };
    return Rol;
};

