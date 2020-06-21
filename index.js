require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const app = require('./src/app')

app.init()