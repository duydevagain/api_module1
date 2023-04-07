const express = require('express');
const app = express();
const port = process.env.port || 8888;

const route = require('./api/routes');

app.use('/',route);

app.listen(port,() =>{
    console.log('running ...', port);
});