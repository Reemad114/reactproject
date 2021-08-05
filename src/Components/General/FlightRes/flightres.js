import React from "react"
import './flightres.css'
class FlightRes extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    if(this.props.data.length > 0){
        return (
            this.props.data.map(item => (
              <div id='flight_res'>
                <div id="info1">
                  <p>{item.flight_number}</p>
                  <p>{item.Company}</p>
                  <p>{item.Gate}</p>
                </div>
                <div id="info2">
                  <p>{item.Fromdest}</p>
                  <p>{item.Destination}</p>
                  <p>{item.Depart}</p>
                  <p>{item.take_Off_time}</p>
                  <p>{item.Landing_time}</p>
                </div>
                <div id="price">
                  <p>{item.Ticket_Price}</p>
                </div>
              </div>
                )
            )
        )
    }
    else{
        return(<h>{this.props.data}</h>)
    }
  }
}
export default FlightRes
