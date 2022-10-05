const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component {

    render() {

        const { products } = this.props

        return (
            <DefaultLayout title="All Product Inventory"> 
                <div>
                    <h1 id='header'>Herbal Tea Apothecary</h1>
                    <ul id="products-index">
                        {products.map((product) => {
                            return (
                                <li class='org-items' key={product._id}>
                                    
                                    <a href={`/products/${product._id}`}>
                                        <img style={{ height: '300px', width: '300px' }} src={product.image} />
                                    </a>
                                    <div class='para'>
                                        <div class='topline'>
                                            <p id='priceline'>{product.name}</p>
                                            <p id='priceline'> ${product.price}</p>
                                        </div>
                                    </div>
                                    
                                    
                                </li>
                                
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/products/new">Create a new product</a>
                    </nav>
            </div>
         </DefaultLayout> 
        )
    }
}

module.exports = Index;