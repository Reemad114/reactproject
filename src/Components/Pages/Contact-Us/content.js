import React from 'react';
import "./content.css";
import Form from './Form/form.js'

class Content extends React.Component{
  render() {
    return (
      <div className="content container py-2">
        <Form />
      </div>
    );
  }
}
export default Content
