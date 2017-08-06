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
 this.handleSubmit = this.handleSubmit.bind(this);


 this.state = {
   title: '',
   description: '',
   package_contents: '',
   image_url: '',
   price: '',
   likes: '',
   posts: '',
   friends: '',
  };
 }

 handleTitleChange(event) {
   this.setState({ title: event.target.value });
   console.log(this.state.title);
 }

 handleDescriptionChange(event) {
   this.setState({ description: event.target.value });
   console.log(this.state.description);
 }

 handlePackageContentsChange(event) {
   this.setState({ package_contents: event.target.value });
   console.log(this.state.package_contents);
 }

 handleImageChange(event) {
   this.setState({ image_url: event.target.value });
   console.log(this.state.image_url);
 }

 handlePriceChange(event) {
   this.setState({ price: event.target.value });
   console.log(this.state.price);
 }

 handleLikesChange(event) {
   this.setState({ likes: event.target.value });
   console.log(this.state.likes);
 }

 handlePostsChange(event) {
   this.setState({ posts: event.target.value });
   console.log(this.state.posts);
 }

 handleFriendsChange(event) {
   this.setState({ friends: event.target.value });
   console.log(this.state.friends);
 }


 handleSubmit(event) {
   event.preventDefault();
   console.log(this.state);
   let title = this.state.title;
   let description = this.state.description;
   let package_contents = this.state.package_contents.trim();
   let image_url = this.state.image_url.trim();
   let price = this.state.price.trim();
   let likes = this.state.likes.trim();
   let posts = this.state.posts.trim();
   let friends = this.state.friends.trim();

   if(!title || !description || !package_contents || !image_url || !price || !likes || !posts || !friends){
     return;
   }
   let product = {
      title: title,
      description: description,
      package_contents: package_contents,
      image_url: image_url,
      price: price,
      likes: likes,
      posts: posts,
      friends: friends
    }

   this.props.onProductSubmit(product);
   this.setState({title: '', description: '', package_contents: '', image_url: '', price: '', likes: '', posts: '', friends: ''});
 }


 render() {
   return (
    <div className="container">
     <form onSubmit={this.handleSubmit} className="form-horizontal" >
       <div className="form-group">
         <label className="col-sm-2 control-label">Title</label>
         <div className="form-group-lg col-sm-10">
           <input type='text' className="form-control" placeholder='Title' value={ this.state.title } onChange={ this.handleTitleChange } />
         </div>

          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="adminInput form-control" rows="3" type='text' placeholder='Description' value={ this.state.description } onChange={ this.handleDescriptionChange } />
          </div>

          <label className="col-sm-2 control-label">Package Contents</label>
          <div className="col-sm-10">
            <input className="adminInput form-control" type='text' placeholder='Package Contents' value={ this.state.package_contents } onChange={ this.handlePackageContentsChange } />
          </div>

          <label className="col-sm-2 control-label">Image Url</label>
          <div className="col-sm-10">
            <input className="adminInput form-control" type='text' placeholder='Image URL' value={ this.state.image_url } onChange={ this.handleImageChange } />
          </div>

          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-2">
            <input className="adminInput form-control" type='text' placeholder='Price' value={ this.state.price } onChange={ this.handlePriceChange } />
          </div>

          <label className="col-sm-2 control-label">Likes</label>
          <div className="col-sm-2">
            <input className="adminInput form-control" type='text' placeholder='Likes' value={ this.state.likes } onChange={ this.handleLikesChange } />
          </div>

          <label className="col-sm-2 control-label">Posts</label>
          <div className="col-sm-2">
            <input className="adminInput form-control" type='text' placeholder='Posts' value={ this.state.posts } onChange={ this.handlePostsChange } />
          </div>

          <label className="col-sm-2 control-label">Friends</label>
          <div className="col-sm-2">
            <input className="adminInput form-control" type='text' placeholder='Friends' value={ this.state.friends } onChange={ this.handleFriendsChange } />
          </div>
          <button className="adminSubmit btn btn-primary btn-lg btn-block"
             type = 'submit'
             value = 'Post'>Post NuÜ</button>
        </div>
      </form>
      </div>
       )
     }
}

export default AdminNuUForm;
