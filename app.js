'use strict';

const http = require('http');

const port = process.env.port || 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hola mundo');
});

server.listen(port)