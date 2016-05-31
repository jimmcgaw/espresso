var express = require('express');


var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');


app.get('/', function(request, response){
    response.render('index', {
        title: 'Hello from render',
        list: ['a', 'b', 'c', 'e']
    });
});

app.listen(port, function(err){
    console.log('Server running on port: ' + port.toString());
});