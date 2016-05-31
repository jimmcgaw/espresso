var express = require('express');
var mysql = require('mysql');  // just for query formatting

var aboutRouter = express.Router();

var router = function(nav, connectionPool){
    aboutRouter.route('/')
        .get(function(request, response){
            connectionPool.getConnection(function(err, connection){
                connection.query('SELECT id, name, blurb, img_src FROM persons;', function(err, rows){
                    console.log(rows);
                    
                    response.render('about', {
                        title: 'About our company',
                        nav: nav,
                        team: rows
                    });
                    
                    connection.release();
                });
            });
        });

    aboutRouter.route('/:id')
        .get(function(request, response){
            var personId = request.params.id;
            connectionPool.getConnection(function(err, connection){
                var inserts = ['persons', 'id', personId];
                var sql = 'SELECT name, blurb, img_src FROM ?? WHERE ?? = ?';
                var query = mysql.format(sql, inserts);
                connection.query(query, function(err, rows){
                    console.log(rows);
                    if (rows.length > 0){
                        var person = rows[0];
                        response.render('person', {
                            title: 'Services we offer',
                            nav: nav,
                            person: person
                        });
                    }
                    
                    connection.release();
                });        
            });
        
            
        });
    
    return aboutRouter;
};


module.exports = router;