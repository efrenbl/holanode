'use strict';

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});


app.get('/', function(req, res) {
    res.status(200).send('Express for courier is working on IISNode!');
});