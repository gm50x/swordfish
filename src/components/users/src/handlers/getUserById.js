const userRepository = require('../models/userRepository')

module.exports = async (req, res) => {
    const { id } = req.params

    if (!id) {
        res.status(400).json({ message: 'missing required formal id parameter' })
    }
    const user = await userRepository.getById()
    res.status(200).json(user)
}