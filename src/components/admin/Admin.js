import React, { Component } from 'react';

export default class Admin extends Component {
constructor() {
  super();

  this.handleAdminButtonSubmit = this.handleAdminButtonSubmit.bind(this);
  this.handleAdminButtonDeleteClick = this.handleAdminButtonDeleteClick.bind(this);
  this.handleAdminButtonUpdateClick = this.handleAdminButtonUpdateClick.bind(this);
  this._renderCorrectPageLayout = this._renderCorrectPageLayout.bind(this);

  this.state = {
    productCards: [],
    selectedProductId: "",
    selectedProductValue: "",
    displayPage: "",
    currentPage: "Admin Master Page"
  }
}

handleAdminButtonSubmit(event){
  event.preventDefault();
  if(this.state.selectedProductValue === "delete"){
    let status = this.state.selectedProductValue;
    this.setState({
      displayPage: status,
      currentPage: "Admin Delete Page"
    });
    console.log("displayPage" + this.state.displayPage);
    console.log(this.state.currentPage);
  }
  else if(this.state.selectedProductValue === "update"){
    let status = this.state.selectedProductValue;
    this.setState({
      displayPage: status,
      currentPage: "Admin Update Page"
    });
    console.log("displayPage" + this.state.displayPage);
    console.log(this.state.currentPage);
  }
}

handleAdminButtonDeleteClick(event) {
  this.setState({
    selectedProductId: event.target.id,
    selectedProductValue: event.target.value
  });
}

handleAdminButtonUpdateClick(event) {
  this.setState({
    selectedProductId: event.target.id,
    selectedProductValue: event.target.value
  });
}

componentDidMount() {
  fetch("https://intense-river-24910.herokuapp.com/api/products")
  .then(resp => resp.json())
    .then(resp => {
      let response = resp;
      console.log(response);
      let responseCards = response.map((card) => {
        return(
          <div key={card._id}>
            <h1>{card.title},</h1>
            <img src={card.image_url} />
            <p>{card.description}</p>
            <form onSubmit={this.handleAdminButtonSubmit}>
              <button type="submit" onClick={this.handleAdminButtonDeleteClick} value="delete" id="{_id}">Delete</button>
              <br></br>
              <button type="submit" onClick={this.handleAdminButtonUpdateClick} value="update" id="{_id}">Update</button>
            </form>
          </div>
        )
      })
      this.setState({productCards: responseCards});
    })
  }

_renderCorrectPageLayout() {
  if(this.state.currentPage == "Admin Master Page"){
    console.log(this.state.currentPage);
    return(
      <div>
        {this.state.productCards}
      </div>
    )
  }
  else if(this.state.currentPage == "Admin Update Page"){
    console.log(this.state.currentPage);
    return(
      <div>
        <form>
          <label>Title</label>
          <input type="text"/>
          <label>Description</label>
          <input type="text"/>
          <label>Package Contents</label>
          <input type="text"/>
          <label>Image URL</label>
          <input type="text"/>
          <label>Price</label>
          <input type="text"/>
          <label>Likes</label>
          <input type="text"/>
          <label>Posts</label>
          <input type="text"/>
          <label>Likes</label>
          <input type="text"/>
          <label>Friends</label>
          <input type="text"/>
        </form>
      </div>
    )
  }
  else if(this.state.currentPage == "Admin Delete Page"){
    console.log(this.state.currentPage);
    return(
      <div>
        <input type="button" value="X" />
        <h5>Are you sure you want to delete this product</h5>
        <form>
          <button type="submit">Yes</button>
          <button type="submit">No</button>
        </form>
      </div>
    )
  }
}

    render() {
        return (
            <div>
              <h1>{this.state.currentPage}</h1>
                {this._renderCorrectPageLayout()}
            </div>
        )
    }
}
