import React from 'react';
import MyCard from '../../../General/Card/card.js'

class Ideas extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const ideasCards = this.props.data.map(oneitem =>
        <MyCard item={oneitem}
         />
       )
    return (
      <div>
        <h2 className="text-center mt-4 shadow py-2">We Have Some Ideas For You</h2>
        <div className = "row mt-2 justify-content-center">
          {ideasCards}
        </div>
      </div>
    )
  }
}
export default Ideas
