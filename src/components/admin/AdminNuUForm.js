//CommentForm.js
import React, {Component} from 'react'

class AdminNuUForm extends Component {
 constructor(props) {
 super(props);

 this.handleTitleChange = this.handleTitleChange.bind(this);
 this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
 this.handlePackageContentsChange = this.handlePackageContentsChange.bind(this);
 this.handleImageChange = this.handleImageChange.bind(this);
 this.handlePriceChange = this.handlePriceChange.bind(this);
 this.handleLikesChange = this.handleLikesChange.bind(this);
 this.handlePostsChange = this.handlePostsChange.bind(this);
 this.handleFriendsChange = this.handleFriendsChange.bind(this);


 this.state = {
   title: '',
   description: '',
   package_contents: '',
   image_url: '',
   price: '',
   likes: '',
   posts: '',
   friends: ''
  };
 }

 handleTitleChange(event) {
 this.setState({ title: event.target.value });
 }

 handleDescriptionChange(event) {
 this.setState({ description: event.target.value });
 }

 handlePackageContentsChange(event) {
 this.setState({ package_contents: event.target.value });
 }

 handleImageChange(event) {
 this.setState({ image_url: event.target.value });
 }

 handlePriceChange(event) {
 this.setState({ price: event.target.value });
 }

 handleLikesChange(event) {
 this.setState({ likes: event.target.value });
 }

 handlePostsChange(event) {
 this.setState({ posts: event.target.value });
 }

 handleFriendsChange(event) {
   this.setState({ friends: event.target.value })
 }


 handleSubmit(event) {
   event.preventDefault();
   console.log(this.state);
   let title = this.state.title;
   let description = this.state.description.trim();
   let package_contents = this.state.package_contents.trim();
   let image_url = this.state.image_url.trim();
   let price = this.state.price.trim();
   let likes = this.state.likes.trim();
   let posts = this.state.posts.trim();
   let friends = this.state.friends.trim();

   if(!title || !description || !package_contents || !image_url || !price || !likes || !posts || !friends){
     return;
   }
   this.props.onProductSubmit({title: title, description: description, package_contents: package_contents, image_url: image_url, price: price, likes: likes, posts: posts, friends: friends});
   this.setState({title: '', description: '', package_contents: '', image_url: '', price: '', likes: '', posts: '', friends: ''});
 }


 render() {
   return (
     <form className="adminForm" method="POST" action="https://intense-river-24910.herokuapp.com/api/products" >
       <input type='text' placeholder='Title' value={ this.state.title } onChange={ this.handleTitleChange } />

        <input className="adminInput" type='text' placeholder='Description' value={ this.state.description } onChange={ this.handleDescriptionChange } />

        <input className="adminInput" type='text' placeholder='Package Contents' value={ this.state.package_contents } onChange={ this.handlePackageContentsChange } />

        <input className="adminInput" type='text' placeholder='Image URL' value={ this.state.image_url } onChange={ this.handleImageChange } />

        <input className="adminInput" type='text' placeholder='Price' value={ this.state.price } onChange={ this.handlePriceChange } />

        <input className="adminInput" type='text' placeholder='Likes' value={ this.state.likes } onChange={ this.handleLikesChange } />

        <input className="adminInput" type='text' placeholder='Posts' value={ this.state.posts } onChange={ this.handlePostsChange } />

        <input className="adminInput" type='text' placeholder='Friends' value={ this.state.friends } onChange={ this.handleFriendsChange } />

        <input className="adminSubmit"
           type = 'submit'
           value = 'Post'/>
         </form>
       )
     }
}

export default AdminNuUForm;
