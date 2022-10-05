const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
       render() {
            // const {product} = this.props
           return (
               
            <DefaultLayout title="Product Details"> 
                     <div id='style'>
                        <html>
                            <body>
                                    {/* <link rel="stylesheet" href="/css/app.css" /> */}
                                    <h1 id='title'><i>Product Details</i></h1>
                                    {/* {console.log (this.props.product.name)} */}
                                    <h2 id='header'> {this.props.product.name}</h2>
                                     <img style={{ height: '450px', width: '550px' }} src={this.props.product.image} />
                                     <div class='subheader'>
                                    <h4>Description: {this.props.product.description}</h4>
                                    
                                    <h4>Price: ${this.props.product.price}</h4>
                                    
                                    <h4>{this.props.product.qty > 0 ? `${this.props.product.qty} in stock` : `Out of Stock`}</h4>
                                    </div>
                                    <form action={`/products/${this.props.product._id}/purchase?_method=PATCH`} method="POST">
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
            </DefaultLayout> 
              )
       }
}
module.exports = Show;
