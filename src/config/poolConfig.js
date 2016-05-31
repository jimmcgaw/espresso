var merge = require('merge');
var mysqlConfig = require('./mysqlconf');

var config = {
    connectionLimit: 10
}

module.exports = merge(mysqlConfig, config);
