const { DataTypes } = require('sequelize')
const { db } = require('../../../../core')

module.exports = db.define('Parameter', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    schema: 'swordfish',
})