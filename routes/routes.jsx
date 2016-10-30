var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} custom={window.PROPS} />;
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={require('../views/Layout.jsx')}>
            <IndexRoute component={require('../views/Index.jsx')} />
        </Route>
    </Router>
);
