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
    fetch("https://intense-river-24910.herokuapp.com/api/products")
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
        this.setState({data: res.results});
    })
  }

  handleProductSubmit(product) {
    let products = this.state.data;
    product.id = Date.now();
    let newProducts = products.push(product);
    this.setState({data: newProducts})
    axios.post("https://intense-river-24910.herokuapp.com/api/products", product).then(res => {
      this.loadProductsFromServer();
    })
    .catch(err =>{
      console.log(err);
    });
  }

  handleProductDelete(id) {
    let deleteUrl = 'https://intense-river-24910.herokuapp.com/api/products/' + id;
    axios.delete(deleteUrl)
    .then(res => {
      console.log('Product deleted');
      this.loadProductsFromServer();
    })
    .catch(err => {
      console.error(err);
    });

  }

  handleProductUpdate(id, product) {
    let updateProductUrl = 'https://intense-river-24910.herokuapp.com/api/products/' + id;
    axios.put(updateProductUrl, product).then(res =>{
      this.loadProductsFromServer();
    })
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
      {this.state.data.length > 0 ? (
      <div className="adminDiv">
        <AdminProductList
          onProductDelete = {this.handleProductDelete}
          onProductUpdate = {this.handleProductUpdate}
          data={this.state.data}
          />
        <AdminNuUForm onProductSubmit={this.handleProductSubmit}
          />
      </div>
    ) : (
      <div>Loading</div>
    )}
    </div>
    )
  }
}
export default AdminBox;
