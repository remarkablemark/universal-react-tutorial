var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} {...window.PROPS} />;
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={require('../Component.jsx')}>
        </Route>
    </Router>
);
