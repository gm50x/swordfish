require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })
const User = require('../../components/users/src/models/UserModel')
User.sync()
    .then(() => console.log('synced'))
    .catch((err) => console.log('not synced', err.message))