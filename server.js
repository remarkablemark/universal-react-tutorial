var express = require('express');
var app = express();

app.get('/', function(request, response) {
    var html = '<h1>Hello World!</h1>';
    response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
