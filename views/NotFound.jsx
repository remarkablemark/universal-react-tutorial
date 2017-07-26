var React = require('react');
var Route = require('react-router-dom').Route;

module.exports = function NotFound(props) {
    return (
        <Route render={function(props) {
            if (props.staticContext) {
                props.staticContext.status = 404;
            }
            return (
                <p>
                    Current: <strong>404 Not Found</strong>
                </p>
            );
        }} />
    );
}