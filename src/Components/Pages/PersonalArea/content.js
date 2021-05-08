import React from 'react';
import Help from './Help/help.js';
import Destinations from './Destinations/destinations.js'
import PrevRes from "./Reservations/prevRes.js"
import NextRes from "./Reservations/nextRes.js"

class Content extends React.Component{
  render() {
    return (
      <div className="container">
        <Help data={this.props.data.Help}/>
        <Destinations data={this.props.data.RecDests}/>
        <NextRes data={this.props.data.Next}/>
        <PrevRes data={this.props.data.Prev}/>
      </div>
    );
  }
}
export default Content
