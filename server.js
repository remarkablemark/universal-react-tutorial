require('babel-register')({
    presets: ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

app.use(express.static('public'));

app.get('/', function(request, response) {
    var props = { title: 'Universal React' };
    var html = ReactDOMServer.renderToString(
        React.createElement(Component, props)
    );
    response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
