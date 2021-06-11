import React from 'react';

/* Import Components */
import Input from "../../General/Form/input";
import TextArea from "../../General/Form/textarea";
import Button from "../../General/Form/button";
import './content.css'

class Content extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      newMsg: {
        name: "",
        email: "",
        message: ""
        },

    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */


  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newMsg: {
          ...prevState.newMsg,
          name: value
        }
      }),
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newMsg: {
          ...prevState.newMsg,
          email: value
        }
      }),
    );
  }

  handleMessage(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newMsg: {
          ...prevState.newMsg,
          message: value
        }
      }),
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let msgData = this.state.newMsg;
    alert(msgData.email+" "+ msgData.message+" "+ msgData.name);

  }



  render() {
    return (
      <form className="contact-us-form container" onSubmit={this.handleFormSubmit}>
        <Input
          classname={"name"}
          inputType={"text"}
          title={"Enter Your Full Name:"}
          name={"name"}
          value={this.state.newMsg.name}
          placeholder={"Full Name"}
          handleChange={this.handleFullName}
        />{" "}
        {/* Name of the user */}

        <Input
          classname={"email"}
          inputType={"email"}
          title={"Enter Your Email:"}
          name={"email"}
          value={this.state.newMsg.email}
          placeholder={"Email"}
          handleChange={this.handleEmail}
        />{" "}
        {/* Email of the user */}

        <TextArea
        classname={"msg"}
          title={"Enter Your Message:"}
          rows={10}
          value={this.state.newMsg.message}
          name={"currentPetInfo"}
          handleChange={this.handleMessage}
          placeholder={"how can we help you!"}
        />
        {/* Your Message */}

        <Button
          action={this.handleFormSubmit}
          type={"dark"}
          title={"Send"}
        />{" "}
        {/*Submit */}
    </form>
    );
    
  }
}

export default Content;
