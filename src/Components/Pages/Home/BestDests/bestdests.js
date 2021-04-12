import React from 'react';
import MyCard from '../../../General/Card/card.js'
import BestDestinations from './bestdestJson.js'
import './bestdest.css'

class BestDests extends React.Component{
  render() {
    const bestdestCards = BestDestinations.map(oneitem =>
        <MyCard item={oneitem}/>
      );
    return (
      <div>
        <h2 className="text-center mt-2 shadow py-2">Find The Best Destinations All Over The World</h2>
        <div className = "row mt-2 justify-content-center">
          {bestdestCards}
        </div>
      </div>
    )
  }
}
export default BestDests
