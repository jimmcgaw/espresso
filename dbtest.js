var mysql = require('mysql');
var mysqlConfig = require('./src/config/mysqlconf');

var connection = mysql.createConnection(mysqlConfig);

connection.connect();

connection.query('SHOW TABLES;', function(err, results){
    if (err){
        console.log('Error connecting to MySQL: ' + err);
    } else {
        console.log('Connected to MySQL w/o any problem!');
    }
    
    connection.end();
});