var React = require('react');

module.exports = React.createClass({
    _handleClick: function() {
        alert();
    },
    render: function() {
        return (
            <html>
                <head>
                    <title>Universal App with React</title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <p>Isn't server-side rendering remarkable?</p>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
                    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
});
