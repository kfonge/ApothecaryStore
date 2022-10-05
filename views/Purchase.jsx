const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Purchase extends React.Component {

    render() {

        const { products } = this.props

        return (
            <DefaultLayout title="All Product Inventory"> 
                <div>
                    <h1 id='header'>Thank you for shopping with us!</h1>
                    
                    <nav>
                        <a href="/products">Home</a>
                    </nav>
            </div>
         </DefaultLayout> 
        )
    }
}

module.exports = Purchase;