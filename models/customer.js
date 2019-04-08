
var mongoose = require('../config/mongoose')

var CustomerSchema = mongoose.Schema({

    username: {type: String, unique: true, required: true, match: /^[a-zA-Z0-9]+$/},
    password: {type: String, required: true},
    email: {type: String, required: true, match: /\S+@\S+\.\S+/},
    image: String,
    phone: String,

})

var Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer
