var mysql = require('mysql');
var mysqlConfig = require('./src/config/mysqlconf');

// here's our silly little schema; create the table in MySQL.
// CREATE TABLE persons ( id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(50), blurb TEXT, img_src VARCHAR(255), PRIMARY KEY (id) );

var cn = mysql.createConnection(mysqlConfig);

var people = [
    { name: 'Jim McGaw', img_src: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/05b/36e/030a159.jpg',
    blurb: "I smile because I have no idea what's going on."},
    { name: 'Rodrigo Savage', img_src: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAL1AAAAJDdmZDY0MTY0LTE5Y2ItNDE0MS1iOTcwLTc3YWM1NTY0MDY0Yg.jpg', blurb: "I teach computers how to tell what they're seeing."}
];

cn.connect();

for (var i = 0; i < people.length; i++){
    var person = people[i];
    var query = cn.query('INSERT INTO persons SET ?', person, function(err, result){
        if (err){
            console.log('Error inserting record:' + err);
        }
    });
    console.log(query.sql);
}

cn.end();  // cleanup connection


