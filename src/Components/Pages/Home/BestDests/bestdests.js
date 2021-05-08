import React from 'react';
import MyCard from '../../../General/Card/card.js'
import './bestdest.css'

class BestDests extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    {/* Mapping over the destinations json and return card for every item */}
    const bestdestCards = this.props.data.map(oneitem =>
        <MyCard item={oneitem}/>
      );
    return (
      <div>
        <h2 className="text-center mt-4 shadow py-2">Find The Best Destinations All Over The World</h2>
        <div className = "row mt-2 justify-content-center">
          {bestdestCards}
        </div>
      </div>
    )
  }
}
export default BestDests
