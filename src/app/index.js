const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

const router = require('./router')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

function init(port = process.env.PORT || 3000) {
    app.listen(port, () => console.log('Application is listening on localhost:3000'))
}

module.exports = { init }