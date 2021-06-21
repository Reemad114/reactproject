import React from "react"

class FlightRes extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    if(this.props.data.length > 0){
        return (
            this.props.data.map(item => (
                <div>
                    <p>{item.flight_number}</p>
                    <p>{item.Company}</p>
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
