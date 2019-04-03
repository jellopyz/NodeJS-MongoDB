
const app = require('./app')


var port = process.env.PORT || 7000;

app.listen(port, function() {
    console.log('Service started on port: ' + port);
});