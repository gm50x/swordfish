const repo = require('./userRepository')

module.exports = class User {
    constructor({ name, email, password }) {
        this.name = name
        this.email = email
        this.password = password
    }

    async create() {
        const result = await repo.create({
            name: this.name,
            email: this.email,
            pwd: this.password
        })

        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
    }
}