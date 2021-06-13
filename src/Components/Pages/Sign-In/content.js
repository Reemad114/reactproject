import React from 'react';
import Input from "../../General/Form/input";
import Button from "../../General/Form/button";
import './content.css'

class SignInForm extends React.Component{
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["email"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submitted');
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 
    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (typeof input["username"] !== "undefined") {
      const re = /^\S*$/;
      if(input["username"].length < 6 || !re.test(input["username"])){
          isValid = false;
          errors["username"] = "Please enter valid username.";
      }
    }
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    this.setState({
      errors: errors
    });

    return isValid;
}
render() {
  return (
    <div>
      <form className="sign-in container" onSubmit={this.handleSubmit}>

        <div class="form-group">
          <label for="username">Username:</label>
          <input 
            type="text" 
            name="username" 
            value={this.state.input.username}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter username" 
            id="username" />

            <div className="text-danger">{this.state.errors.username}</div>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <input type="submit" value="Submit" class="btn btn-dark" />

  </form>
  <p className="sign-Up">
    Don't have an account ? <a href="/signup">sign-up</a>
  </p>
  </div>
  )
}
}

export default SignInForm;
