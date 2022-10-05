const React = require('React')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {
           return (
            <DefaultLayout title="Edit Product"> 
               <div className='box3'>
                         <link rel="stylesheet" href="/css/app.css" />
                         <h1 id='header'><i>Edit Product Details</i></h1>
                   <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                                Name:
                                <br></br>
                                <input type="text" name="name" defaultValue={this.props.product.name} />
                                <br></br>
                                Description:
                                <br></br>
                       <input type="text" name="description" defaultValue={this.props.product.description} />
                                <br></br>
                                Image URL:
                                <br></br>
                                <input type="text" name="image" defaultValue={this.props.product.image} />
                                <br></br>
                                Price: $
                                <br></br>
                       <input type="number" name="price" step="1" min="0" defaultValue={this.props.product.price} />
                                <br></br>
                                Quantity:
                                <br></br>
                       <input type="number" name="qty" min="0" step="1" defaultValue={this.props.product.qty} />
                                <br></br>
                                
                                <input type="submit" name="" value="Update Product"  /><br></br>                                    
                                <a href={`/products/`} style= {{marginLeft:10 + 'em'}} >Back </a>
                         </form>
                  </div>
             </DefaultLayout> 
            )
    }
}
module.exports = Edit

// const React = require('react')
// const DefaultLayout = require('../layouts/DefaultLayout')

// class Edit extends React.Component {
//     render() {

//         let { product } = this.props

//         return (
//             <DefaultLayout title="Edit product" >
//                 <h1>Edit Page</h1>
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

// module.exports = Edit