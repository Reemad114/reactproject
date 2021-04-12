import React from 'react';
import MyCard from '../../../General/Card/card.js'
import IdeasCards from './ideasJson.js'

class Ideas extends React.Component{
  render() {
    const ideasCards = IdeasCards.map(oneitem =>
        <MyCard item={oneitem}
         />
       )
    return (
      <div>
        <h2 className="text-center mt-2 shadow py-2">We Have Some Ideas For You</h2>
        <div className = "row mt-2 justify-content-center">
          {ideasCards}
        </div>
      </div>
    )
  }
}
export default Ideas
