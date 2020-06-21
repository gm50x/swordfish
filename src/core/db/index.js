const { Sequelize } = require('sequelize')

module.exports = new Sequelize({
    database: process.env.db_base,
    username: process.env.db_user,
    password: process.env.db_pass,
    host: process.env.db_host,
    dialect: 'postgres',
    quoteIdentifiers: false,
    define: { version: true },
    logging: false
})