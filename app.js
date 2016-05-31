var express = require('express');


var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(request, response){
    response.send('hello world');
});

app.listen(port, function(err){
    console.log('Server running on port: ' + port.toString());
});