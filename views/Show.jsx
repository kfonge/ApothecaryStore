const React = require('react')
class Show extends React.Component {
       render() {
            // const {product} = this.props
              return (
                     <div className='box2'>
                        <html>
                            <body>
                                    {/* <link rel="stylesheet" href="/css/app.css" /> */}
                                    <h1><i>Product Detail Page</i></h1>
                                    {/* {console.log (this.props.product.name)} */}
                                    <h2> {this.props.product.name}</h2>
                                     <img style={{ height: '450px', width: '550px' }} src={this.props.product.image} />
                                    
                                    <h3>Description: {this.props.product.description}</h3>
                                    
                                    <h3>Price: {this.props.product.price}</h3>
                                    
                                    <h3 >{this.props.product.qty > 0 ? `${this.props.product.qty} in stock` : `Out of Stock`}</h3>
                                    
                                    <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                                        {this.props.product.qty > 0 ?
                                                <input id="buy" type="submit" value="Buy product " /> : null}
                                    </form>
                                    
                                    <br></br>
                                    <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete" />
                                    </form>
                                    <br></br>
                                    <a href={`/products/${this.props.product._id}/edit`}>Edit Herbal Tea</a>
                                    <br></br>
                                    <br></br>
                                    <a href={`/products/`}>Back </a>
                            </body>
                        </html>
                     </div>
              )
       }
}
module.exports = Show;

// const React = require('react')
// const DefaultLayout = require('./layouts/DefaultLayout')

// class Show extends React.Component {
//     render() {

//         let { product } = this.props

//         return (
//             <DefaultLayout >
//                 <h1>Show Page</h1>
//                 <form action={`/products/${product._id}?_method=PUT`} method="POST">

//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name" defaultValue={product.name} />

//                     <label htmlFor="price">Price:</label>
//                     <input type="text" id="price" price="price" defaultValue={product.price} />

//                     <label htmlFor="volume">Volume:</label>
//                     <input type="text" id="volume" name="volume" defaultValue={product.volume} />

//                     <label htmlFor="inStock">Currently in stock:</label>
//                     <input type="checkbox" id="inStock" name="inStock" defaultChecked={product.inStock} />

//                     <input type="submit" value="Edit Product"/>
//                 </form>
//             </DefaultLayout>
//         )
//     }
// }

// module.exports = Show