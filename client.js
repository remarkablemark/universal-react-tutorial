var ReactDOM = require('react-dom');
var React = require('react');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var BrowserRouter = require('react-router-dom').BrowserRouter;

function reducer(state) { return state; }

var store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {require('./views/app.jsx')}
        </BrowserRouter>
    </Provider>, document
);
