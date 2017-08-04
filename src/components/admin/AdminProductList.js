//CommentList.js
import React, { Component } from 'react';
import AdminProductCard from './AdminProductCard.js';

class AdminProductList extends Component {
 render() {
   let productNodes = this.props.data.map(product => {
     return (
       <div>
         <h4>{product.title}</h4>
         <img src={product.image_url} />
         <p>{product.description}</p>
         <AdminProductCard key={ product.id }
           uniqueID={product._id}
           onProductDelete={this.props.onProductDelete}
           onProductUpdate={this.props.onProductUpdate}/>
       </div>
     )
   })
   return (
     <div>
       {productNodes}
     </div>
   )
  }
}
export default AdminProductList;



// {/* <AdminProductCard  onProductDelete={this.props.onProductDelete}
//  onProductUpdate={this.props.onProductUpdate} data={this.props.data}/> */}
