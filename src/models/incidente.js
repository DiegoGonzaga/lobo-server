import { Sequelize,  DataTypes } from 'sequelize';
const { DB_SCHEMA, DB_PASSWORD, DB_USER } = process.env;
const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PASSWORD, { dialect: 'mysql' });

export const Pessoa = sequelize.define('incidente',
    {
        local: DataTypes.STRING,
        informacaoAdicional: DataTypes.STRING,
        tipo:DataTypes.STRING
    });
