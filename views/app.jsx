var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Layout = require('./Layout.jsx');

module.exports = (
    <Layout>
        <Route exact path='/' component={require('./Index.jsx')} />
        <Route path='/about' component={require('./About.jsx')} />
        <Route component={require('./NotFound.jsx')} />
    </Layout>
);
