import React, {Component} from 'react'

export default class AdminSignIn extends Component {
 constructor(props) {
 super(props);

 this.handleUsernameChange = this.handleUsernameChange.bind(this);
 this.handlePasswordChange = this.handlePasswordChange.bind(this);
 this.handleUserSubmit = this.handleUserSubmit.bind(this);

  this.state = {
    username: '',
    password: ''
  }
 }

 handleUsernameChange(event) {
   this.setState({username: event.target.value});
 }

 handlePasswordChange(event) {
   this.setState({password: event.target.value});
 }

 handleUserSubmit(event) {
   event.preventDefault();
   let username = this.state.username;
   let password = this.state.password;
   if(!username || !password){
     return;
   }
   this.props.handleAdminSubmit(username, password);
 }

  render() {
    return (
      <div>
        <h1>Admin Sign In </h1>
          <div className="container adminLogin">
          <form className="form-horizontal form-group" onSubmit={this.handleUserSubmit}>
            <div className='col-md-6'>
              <label className="control-label">Username</label>
              <input className="form-control" onChange={this.handleUsernameChange} value={this.state.username}
              placeholder='Input admin password' />

              <label className="control-label">Password</label>
              <input className="form-control" onChange={this.handlePasswordChange} value={this.state.password} placeholder='Input admin password'/>

              <input type="submit" className="btn  btn-primary btn-lg" value="login" />
          </div>
          </form>
        </div>
      </div>
    )
  }

}
