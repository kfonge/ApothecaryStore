const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                   
                    <title>{this.props.name}</title>
                    <link rel="stylesheet" href="css/styles.css" />
                </head>
                <body>
                    {this.props.children}   
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;