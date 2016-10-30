var React = require('react');

module.exports = React.createClass({
    displayName: 'Layout',
    _handleClick: function() {
        alert();
    },
    render: function() {
        var custom = this.props.custom;
        return (
            <html>
                <head>
                    <title>{custom.title}</title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <h1>{custom.title}</h1>
                    <p>Isn't server-side rendering remarkable?</p>
                    <button onClick={this._handleClick}>Click Me</button>
                    {this.props.children}
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
});
