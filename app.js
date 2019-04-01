
var app = require('express')();
var bodyParser = require('body-parser');


var port = process.env.PORT || 7777;

app.get('/', function (req, res){
    res.send('Hello')
});

app.listen(port, function() {
    console.log('Start NodeJS on Port: ' + port);
});