const userRepository = require('../models/userRepository')

module.exports = async (req, res) => {
    const users = await userRepository.getAll()
    res.status(200).json(users)
}