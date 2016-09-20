var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('../Component.jsx');

router.get('/', function(request, response) {
    var props = { title: 'Universal React' };
    var html = ReactDOMServer.renderToString(
        <Component {...props} />
    );
    response.send(html);
});

module.exports = router;
