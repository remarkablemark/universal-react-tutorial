var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={require('../views/Layout.jsx')}>
            <IndexRoute component={require('../views/Index.jsx')} />
            <Route path='about' component={require('../views/About.jsx')} />
        </Route>
    </Router>
);
