import React from 'react';
import './content.css'

class Content extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password: '',
      confirm_password: '',
      errors: {},
      dataResponse:''
      
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleChangeConfirm(event) {
    this.setState({confirm_password: event.target.value});
  }

  handleSubmit =  (event) =>{
    event.preventDefault();
    let isValid = this.validate()
    if(isValid){
  
        let input = {
          "username": this.state.username,
          "email": this.state.email,
          "password": this.state.password,
          "confirm_password": this.state.confirm_password
        }
        fetch('/users/create',
        {
          method: 'POST',
          body: JSON.stringify({input}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(json => this.setState({input:json}));

        const body = this.state.input
        this.setState({ dataResponse: body.msg});
        console.log("respond body" + body.user)
    }

  }
  
  validate(){
      
      let errors = {};
      let isValid = true;
   
      if (!this.state.username) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof this.state.username !== "undefined") {
        const re = /^\S*$/;
        if(this.state.username.length < 6 || !re.test(this.state.username)){
            isValid = false;
            errors["username"] = "Please enter valid username.";
        }
      }
  
      if (!this.state.email) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof this.state.email !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!this.state.password) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!this.state.confirm_password) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof this.state.password !== "undefined") {
        if(this.state.password.length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof this.state.password !== "undefined" && typeof this.state.confirm_password !== "undefined") {
          
        if (this.state.password != this.state.confirm_password) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div className="container signuppage">
        <form className="sign-up-form mx-auto" onSubmit={this.handleSubmit}>
          <p id="signuptitle"><h1>Please Sign Up</h1></p>
          <div class="form-group">
            <label for="username">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.username}
              onChange={this.handleChangeUsername}
              class="form-control" 
              placeholder="Enter username" 
              id="username" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.email}
              onChange={this.handleChangeEmail}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChangePassword}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.confirm_password}
              onChange={this.handleChangeConfirm}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
             
          <input type="submit" value="SUBMIT" class="btn btn-dark" />
        </form>
      </div>
    );
  }
}
export default Content;
