//CommentList.js
import React, { Component } from 'react';
import AdminProductCard from './AdminProductCard.js';
import './Styles/admin.css'

class AdminProductList extends Component {
 render() {
   let productNodes = this.props.data.map((product) => {

     return (
       <div className="productsThing">
         <div className="ProcutsThingContainer" key={product._id}>
           <img className="adminImg" src={product.image_url} />
             <h4 className="adminH4 card-title">{product.title}</h4>
             <p className="adminP card-text">{product.description}</p>
             <AdminProductCard key={ product.id }
               uniqueID={product._id}
               onProductDelete={this.props.onProductDelete}
               onProductUpdate={this.props.onProductUpdate}/>
          </div>
       </div>
     )
   })
   return (
     <div className="ThisStuff">
       {productNodes}
     </div>
   )
  }
}
export default AdminProductList;



// {/* <AdminProductCard  onProductDelete={this.props.onProductDelete}
//  onProductUpdate={this.props.onProductUpdate} data={this.props.data}/> */}
