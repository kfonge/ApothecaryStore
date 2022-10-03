const React = require('react')
// const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { products } = this.props

        return (
            <div>
                    <h1>Inventory of Herbs</h1>
                    <ul id="products-index">
                        {products.map((product) => {
                            return (
                                <li key={product._id}>
                                   {product.name}
                                </li>
                                
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/products/new">Create a new product</a>
                    </nav>
            </div>
        )
    }
}

module.exports = Index;