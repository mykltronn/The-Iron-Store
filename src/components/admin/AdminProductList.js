//CommentList.js
import React, { Component } from 'react';
import AdminProductCard from './AdminProductCard.js';

class AdminProductList extends Component {
 render() {
   let productNodes = this.props.data.map(product => {
     return (
       <div className="adminDiv">
         <h4 className="adminH4">{product.title}</h4>
         <img className="adminImg" src={product.image_url} />
         <p className="adminP">{product.description}</p>
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
