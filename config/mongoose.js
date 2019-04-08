
var mongoose = require('mongoose')

var url = 'mongodb://localhost:27017/NodeDB'

mongoose.connect(url, { useNewUrlParser: true })

module.exports = mongoose