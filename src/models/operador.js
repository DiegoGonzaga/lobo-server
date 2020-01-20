import { Sequelize, DataTypes } from 'sequelize';
const { DB_SCHEMA, DB_PASSWORD, DB_USER } = process.env;
const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PASSWORD, { dialect: 'mysql' });

export const Operador = sequelize.define('operador',
    {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        data_nasc:DataTypes.DATE,
        naturalidade:DataTypes.STRING,
    });
