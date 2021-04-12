import React from 'react';
import FlightResJson from './FlightReaJson.js'
import ResItem from './FlightRes.js'

class FlightsRes extends React.Component{
  render() {
    const myreservations = FlightResJson.map(oneitem =>
     <ResItem item={oneitem}/>)
  return (
      <div>{myreservations}</div>
  )
}
}
export default FlightsRes;
