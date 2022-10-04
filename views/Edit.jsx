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