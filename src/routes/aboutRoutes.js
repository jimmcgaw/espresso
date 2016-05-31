var express = require('express');

var people = require('../data/people');

var aboutRouter = express.Router();

var router = function(nav){
    aboutRouter.route('/')
        .get(function(request, response){
            response.render('about', {
                title: 'About our company',
                nav: nav,
                team: people
            });
        });

    aboutRouter.route('/:id')
        .get(function(request, response){
            var id = request.params.id;
            response.render('person', {
                title: 'Services we offer',
                nav: nav,
                person: people[id]
            });
        });
    
    return aboutRouter;
}


module.exports = router;