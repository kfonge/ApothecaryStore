const React = require('react')

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
                                    
                                    <a href={`/products/${product.id}`}>
                                        <img style={{ height: '350px', width: '350px' }} src={product.image} />
                                    </a>
                                    <br></br>
                                    {product.name}
                                    <br></br>
                                    {product.price}
                                    <br></br>
                                    Qty In Stock: {product.qty}
                                    
                                    
                                    
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