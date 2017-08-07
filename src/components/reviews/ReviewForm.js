import React, { Component } from 'react';
import axios from 'axios';

export default class ReactForm extends Component {
  constructor() {
    super();

    this.handleReviewShow = this.handleReviewShow.bind(this);
    this.handleNewReview = this.handleNewReview.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.buildOptionSelector = this.buildOptionSelector.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      name:'',
      rating:'',
      review:'',
      parent_id:'',
      reviewShow: false,
      optionHolder:[]
    }
  }
  handleSelectChange(event) {
    this.setState({parent_id: event.target.value});
  }

  handleRatingChange(event) {
    this.setState({rating: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleReviewChange(event) {
    this.setState({review: event.target.value});
  }

  handleReviewShow() {
    this.setState({reviewShow: !this.state.reviewShow});
  }

  handleNewReview(event) {
    event.preventDefault();
    console.log(this.state);
    let name = this.state.name;
    let rating = this.state.rating;
    let review = this.state.review;
    let parent_id = this.state.parent_id;

    if(!name || !rating || !review || !parent_id){
        return;
    }

    let newReview = {
      name: name,
      rating: rating,
      review: review,
      parent_id: parent_id,
    }
    this.handleReviewSubmit(newReview);
  }

  handleReviewSubmit(review) {
    axios.post("https://intense-river-24910.herokuapp.com/api/reviews", review)
    .catch(err => {
      console.log(err);
    })
  }

  buildOptionSelector() {
    fetch("https://intense-river-24910.herokuapp.com/api/products")
    .then(res => res.json())
    .then(res => {
      console.log(res.results);
      let results = res.results.map((product) => {

        return(
          <option key={product._id} onChange={this.handleSelectChange} value={this.state.parent_id = product._id}>{product.title}</option>
        )
      })
      this.setState({optionHolder: results});
    })
  }

  componentDidMount() {
    this.buildOptionSelector();
  }


  render(){
    return(
      <div>
        <input type="button" className="btn" onClick={this.handleReviewShow} value="Write Review"/>
          {(this.state.reviewShow) ? (
            <div className="container">
              <form className="adminForm form-group form-horizontal" onSubmit={this.handleNewReview}>

                <div>
                  <label className="col-sm-2 control-label">Select Product to Review:</label>
                  {this.state.optionHolder.length > 0 ? (
                    <select required >
                      <option value="">None</option>
                      {this.state.optionHolder}
                    </select>
                  ) : (
                    <div>Loading</div>
                  )}
                </div>

                <label className="col-sm-2 control-label">Name:</label>
                <input className="reviewForm form-control" type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>

                <label className="col-sm-2 control-label">Rating: </label>
                <input className="reviewForm form-control" type="number" placeholder="rating" value={this.state.rating} onChange={this.handleRatingChange}/>

                <label className="col-sm-2 control-label">Review</label>
                <input className="reviewForm form-control" type="text" placeholder="Review" value={this.state.review} onChange={this.handleReviewChange}/>


                <input type="submit" className="btn" value="post"/>
                <input type="submit" className="btn" value="close" onClick={this.handleReviewShow}/>
              </form>
            </div>  
            ) : null}
      </div>
    )
  }

}
