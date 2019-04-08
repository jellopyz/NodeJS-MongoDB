
const app = require('express')();
const bodyParser = require('body-parser')

const customerRoute = require('./routes/customerRoute')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/customer', customerRoute)

module.exports = app