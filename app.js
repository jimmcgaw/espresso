var express = require('express');


var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({'extname': '.hbs'}))

app.set('view engine', '.hbs');


app.get('/', function(request, response){
    response.render('index', {
        title: 'Hello from render',
        list: ['a', 'b', 'c']
    });
});

app.listen(port, function(err){
    console.log('Server running on port: ' + port.toString());
});