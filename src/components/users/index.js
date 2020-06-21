const router = require('express').Router()

const addUser = require('./src/handlers/addUser')
const getAllUsers = require('./src/handlers/getAllUsers')
const getUserById = require('./src/handlers/getUserById')

router.post('/', addUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)


module.exports = router