//CommentBox.js
import React, {Component} from 'react';
import AdminProductList from './AdminProductList.js';
import AdminNuUForm from './AdminNuUForm.js';
import axios from 'axios';

class AdminBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadProductsFromServer = this.loadProductsFromServer.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleProductDelete = this.handleProductDelete.bind(this);
    this.handleProductUpdate = this.handleProductUpdate.bind(this);
  }

  loadProductsFromServer() {
    axios.get("https://intense-river-24910.herokuapp.com/api/products")
      .then(res => {
        this.setState({data: res.data});
    })
  }

  handleProductSubmit(product) {
    let products = this.state.data;
    product.id = Date.now();
    let newProducts = products.concat([product]);
    this.setState({data: newProducts})
    axios.post("https://intense-river-24910.herokuapp.com/api/products", product)
    .catch(err =>{
      console.log(err);
      this.setState({data: products});
    });
  }

  handleProductDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
    .then(res => {
      console.log('Product deleted');
    })
    .catch(err => {
      console.error(err);
    });
  }

  handleProductUpdate(id, product) {
    axios.put(`${this.props.url}/${id}`, product)
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.loadProductsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  }

  render() {
    return (
      <div>
        <h2>Product List</h2>
        <AdminProductList
          onProductDelete = {this.handleProductDelete}
          onProductUpdate = {this.handleProductUpdate}
          data={this.state.data}/>
        <AdminNuUForm onProductSubmit={this.handleProductSubmit}/>
      </div>
    )
  }
}
export default AdminBox;
