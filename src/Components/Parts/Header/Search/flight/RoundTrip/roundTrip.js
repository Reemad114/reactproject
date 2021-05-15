import React from 'react';
import Form from '../../../../../General/Form/form.js'
import './roundTrip.css'

class Roundtrip extends React.Component{
  render() {
    return (
        <form className="form mx-5 mt-2 pb-4" action="#">
          {
            this.props.data.map(formitem =>
              <Form item={formitem}/>
            )
          }
        </form>
      )
    }
  }
export default Roundtrip
