const UserModel = require('./UserModel')

module.exports = {
    getAll() {
        return UserModel.findAll()
    },
    getById(id) {
        return UserModel.findByPk(id)
    },
    create(user) {
        return UserModel.create(user)
    }
}