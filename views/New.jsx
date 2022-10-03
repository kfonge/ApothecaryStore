// const React = require('react')
// const DefaultLayout = require('../layouts/DefaultLayout')


// class Index extends React.Component {

//     render() {

//         const { products } = this.props

//         return (
//             <DefaultLayout title="All Product" foodGroup="herbs">
//                     <h1>Inventory of Herbs</h1>
//                     <ul id="products-index">
//                         {products.map((product) => {
//                             return (
//                                 <li key={product._id}>
//                                     The <a href={`/products/${product._id}`}>{product.name}</a> is {product.color}.
//                                 </li>
//                             )
//                         })}
//                     </ul>

//                     <nav>
//                         <a href="/products/new">Create a new product</a>
//                     </nav>
//             </DefaultLayout>
//         )
//     }
// }

// module.exports = New;