import React from 'react';
import FlightJson from './json'
import FlightRes from '../../General/FlightRes/flightres'
import './content.css'

class Content extends React.Component{
 

render() {

  return (
    <div className="booking container">
      <FlightRes data={FlightJson}/>
    </div>
    );
    
  }
}

export default Content;
