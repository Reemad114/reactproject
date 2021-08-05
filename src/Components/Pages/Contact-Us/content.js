import React from 'react';
import './content.css'

class Content extends React.Component{
  constructor() { 
    super();
    //initializing input, errors properties
    //input property: the input results of the values that were inserted 
    //errors property: the errors that will be shown
    this.state = {
      input: {},
      errors: {}
    };
     //
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //  
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
        input["name"] = "";
        input["email"] = "";
        input["message"] = "";
        this.setState({input:input});
        alert('Thank You, Your Message Was Sent Successfully');
    }
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

render() {
  return (
    <div className="contactpage container">
      <ul id="contact-info" >
        <li>Tel: 04-9803471</li>
        <li>Email: SkyCruise@conact.com</li>
        <li>Fax: 03-9978546</li>
      </ul>
      <h2>Please Fill Out The Form So We Can Help You</h2>
      <form className="contact-us-form mx-auto" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="name">Full Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your Name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
            </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea 
              name="message" 
              value={this.state.input.message}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Message" 
              id="message"
              rows={8} />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <input type="submit" value="Submit" class="btn btn-dark" />

      </form>
    </div>
    );
    
  }
}

export default Content;
