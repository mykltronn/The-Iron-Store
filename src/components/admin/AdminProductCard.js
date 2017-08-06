
//Comment.js
import React, { Component } from 'react';
//import marked from 'marked';

class AdminProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: '',
      description: '',
      package_contents: '',
      image_url: '',
      price: '',
      likes: '',
      posts: '',
      friends: ''
    };
    //binding of functions
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePackageContentsChange = this.handlePackageContentsChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleLikesChange = this.handleLikesChange.bind(this);
    this.handlePostsChange = this.handlePostsChange.bind(this);
    this.handleFriendsChange = this.handleFriendsChange.bind(this);
    this.handleProductUpdate = this.handleProductUpdate.bind(this);
  }

  updateProduct(e) {
    e.preventDefault();
    //brings update field
    this.setState({toBeUpdated: !this.state.toBeUpdated});
  }

  handleProductUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //checks if the text has changed
    let title = (this.state.title) ? this.state.title : null;
    let description = (this.state.description) ? this.state.description : null;
    let package_contents = (this.state.package_contents) ? this.state.package_contents : null;
    let image_url = (this.state.image_url) ? this.state.image_url : null;
    let price = (this.state.price) ? this.state.price : null;
    let likes = (this.state.likes) ? this.state.likes : null;
    let posts = (this.state.posts) ? this.state.posts : null;
    let friends = (this.state.friends) ? this.state.friends : null;

    let product = {
      title: title,
      description: description,
      package_contents: package_contents,
      image_url: image_url,
      price: price,
      likes: likes,
      posts: posts,
      friends: friends
     };

    this.props.onProductUpdate(id, product);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      title: '', description: '', package_contents: '', image_url: '', price: '', likes: '', posts: '', friends: ''
    })
  }

  deleteProduct(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onProductDelete(id);
    console.log('You deleted that S$%t');
  }

  handleTitleChange(e) {
  this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
  this.setState({ description: e.target.value });
  }

  handlePackageContentsChange(e) {
  this.setState({ package_contents: e.target.value });
  }

  handleImageChange(e) {
  this.setState({ image_url: e.target.value });
  }

  handlePriceChange(e) {
  this.setState({ price: e.target.value });
  }

  handleLikesChange(e) {
  this.setState({ likes: e.target.value });
  }

  handlePostsChange(e) {
  this.setState({ posts: e.target.value });
  }

  handleFriendsChange(e) {
    this.setState({ friends: e.target.value })
  }

 // rawMarkup() {
 //   let rawMarkup = marked(this.props.children.toString());
 //   return { __html: rawMarkup };
 // }
 render() {
   return (
     <div>
         <a className="adminAnchor btn btn-primary" href="#" onClick={this.updateProduct}>update</a>
         <a className="adminAnchor btn btn-primary" href="#" onClick={this.deleteProduct}>delete</a>
         {(this.state.toBeUpdated) ? (<form className="adminForm form-group" onSubmit={this.handleProductUpdate}>
           <input className="adminForm form-control" type="text" placeholder="Update Title" value={this.state.title} onChange={this.handleTitleChange}/>

           <input className="adminInput" className="adminInput form-control" type="text" placeholder="Update your description..." value={this.state.description} onChange={this.handleDescriptionChange}/>

           <input className="adminInput form-control" type="text" placeholder="Update your package contents..." value={this.state.package_contents} onChange={this.handlePackageContentsChange}/>

           <input className="adminInput form-control" type="text" placeholder="Update your Image..." value={this.state.image_url} onChange={this.handleImageChange}/>

           <input className="adminInput form-control" type="text" placeholder="Update your price..." value={this.state.price} onChange={this.handlePriceChange}/>

           <input className="adminInput form-control" type="text" placeholder="Update your likes" value={this.state.likes} onChange={this.handleLikesChange}/>

           <input className="adminInput form-control" type="text" placeholder="Update your posts..." value={this.state.posts} onChange={this.handlePostsChange}/>

           <input className="adminInput form-control" type="text" placeholder="Update your friends..." value={this.state.friends} onChange={this.handleFriendsChange}/>

           <input className="adminInput btn" type="submit" value='Update'/>
         </form>) : null}
     </div>
   )
  }
}
export default AdminProductCard;
