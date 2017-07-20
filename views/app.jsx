var React = require('react');
var { Route, Switch } = require('react-router-dom');
var Layout = require('./Layout.jsx');

module.exports = () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={require('./Index.jsx')} />
            <Route path='/about' component={require('./About.jsx')} />
            <Route component={require('./NotFound.jsx')} />
        </Switch>
    </Layout>
);
