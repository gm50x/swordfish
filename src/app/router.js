const router = require('express').Router()
const { users } = require('../components')

router.use('/users', users)

module.exports = router