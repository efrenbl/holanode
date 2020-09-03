var express = require('express');
var app = express();

const port = process.env.port || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.status(200);

});

app.listen(port, () => {
    console.log("Wazzappp");
});