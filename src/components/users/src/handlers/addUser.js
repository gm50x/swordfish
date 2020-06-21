const User = require('../models/User')

module.exports = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400).json({ message: 'missing formal parameter [name, email, password]' })
    }

    console.log('here', name, email, password)

    const user = new User({ name, email, password })

    await user.create()

    res.header('ETag', user.version)
    res.header('Location', `/api/users/${user.id}`)

    res.status(200).json(user)
}