const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'brbmxtnkeafjco1nl4ox-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'uqmze3apmce5faz1',
    password: 'yxxLDAA6OJPW09KSTuNK',
    database: 'brbmxtnkeafjco1nl4ox'
});

module.exports = connection;