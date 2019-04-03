
const app = require('express')();
const bodyParser = require('body-parser')

const customerController = require('./controllers/customerController')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/customer', customerController)

module.exports = app