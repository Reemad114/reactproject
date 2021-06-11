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
//   constructor(props) {
//     super(props);

//     this.state = {
//       newUser: {
//         username: "",
//         password: ""
//       },

//     };
//     this.handleUsername = this.handleUsername.bind(this);
//     this.handlePassword = this.handlePassword.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }

//   /* This lifecycle hook gets executed when the component mounts */

//   handleUsername(e) {
//     let value = e.target.value;
//     this.setState(
//       prevState => ({
//         newUser: {
//           ...prevState.newUser,
//           username: value
//         }
//       }),
//     );
//   }

//   handlePassword(e) {
//     let value = e.target.value;
//     this.setState(
//       prevState => ({
//         newUser: {
//           ...prevState.newUser,
//           password: value
//         }
//       }),
//     );
//   }


//   handleFormSubmit(e) {
//     e.preventDefault();
//     let userData = this.state.newUser;
//     alert(userData.username+" "+ userData.password);
//   }


//   render() {
//     return (
//       <div className="sign-in container">
//         <form className="sign-in-form" onSubmit={this.handleFormSubmit}>
//           <Input
//             inputType={"text"}
//             title={"Username :"}
//             name={"username"}
//             value={this.state.newUser.username}
//             placeholder={"Enter your username"}
//             handleChange={this.handleUsername}
//           />{" "}
//           {/* Username of the user */}

//           <Input
//             inputType={"text"}
//             title={"Password :"}
//             name={"Password"}
//             value={this.state.newUser.Password}
//             placeholder={"Enter your Password"}
//             handleChange={this.handlePassword}
//           />{" "}
//           {/* Username of the user */}


//           <Button
//             action={this.handleFormSubmit}
//             type={"dark"}
//             title={"Submit"}
//           />{" "}
//           {/*Submit */}
          
//         </form>
//         <p className="sign-Up">
//           Don't have an account ? <a href="/signup">sign-up</a>
//         </p>
//       </div>
//     );
//   }
// }
export default SignInForm;
