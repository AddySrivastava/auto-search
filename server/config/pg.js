const { Sequelize } = require('sequelize');
const appConfig = require('./dbConfig');

const sequelize = new Sequelize(appConfig.pgDb, appConfig.username, appConfig.password, {
    host: appConfig.pgHost,
    dialect: 'postgres',
    logging: console.log
});


module.exports = sequelize;