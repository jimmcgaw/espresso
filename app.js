var express = require('express');


var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var nav = [
    {
        'href': '/about',
        'name': 'About'
    },
    {
        'href': '/services',
        'name': 'Services'
    }
    
];

var aboutRouter = require('./src/routes/aboutRoutes')(nav);

app.use('/about', aboutRouter);

app.get('/', function(request, response){
    response.render('index', {
        title: 'Hello from render',
        nav: nav
    });
});

app.listen(port, function(err){
    console.log('Server running on port: ' + port.toString());
});