const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { products } = this.props

        return (
            <DefaultLayout title="All Product" prdGroup="herbs">
                    <h1>Inventory of Herbs</h1>
                    <ul id="products-index">
                        {products.map((product) => {
                            return (
                                <li key={product._id}>
                                   
                                </li>
                                
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/products/new">Create a new product</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;