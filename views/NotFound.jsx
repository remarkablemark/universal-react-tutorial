import React from 'react'
import { Route } from 'react-router-dom'

export default function NotFound(props) {
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
