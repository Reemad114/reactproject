import React from 'react';
import Formitem from '../../General/formitem.js'
import Button from 'react-bootstrap/Button';

class SignInForm extends React.Component{
    render() {
      return (
        <div className="container-fluid">
          <h2 className="text-center">Sign In</h2>
          <form className="SignInForm mx-auto">
            <div className="form-group">
                <label>Email address</label>
                <input required type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <Button href="/personal" className="btn btn-dark btn-block">Submit</Button>
            <p className="forgot-password ">
                <a href="#">Forgot password?</a>
            </p>
            <p className="sign-up">
                Don't have an account ? <a href="#">sign-up</a>
            </p>
        </form>
      </div>
    )
  }
}
export default SignInForm;
