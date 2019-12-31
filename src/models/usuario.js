import { Sequelize,  DataTypes } from 'sequelize';
const { DB_SCHEMA, DB_PASSWORD, DB_USER } = process.env;
const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PASSWORD, { dialect: 'mysql' });

export const Usuario = sequelize.define('usuario',
    {
        usuario: DataTypes.STRING,
        senha: DataTypes.STRING
    });
sequelize.sync()
    .then(() => {
        
        Usuario.create({
            usuario: 'maria',
            senha: 'm12'
        })
    });
    /*
.then(result => {
console.log(result.toJSON());
})*/