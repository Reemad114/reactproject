import React from 'react';
import MyCard from '../../General/Card/nobtncard'
import './content.css'

class Content extends React.Component{
 
    constructor(props){
        super(props)
      }
      render() {
        {/* Mapping over the things to do json and return a card for every item */}
        const bestdestCards = this.props.data.map(oneitem =>
            <MyCard item={oneitem}/>
          );
        return (
          <div>
            <div className = "row mt-2 justify-content-center">
              {bestdestCards}
            </div>
          </div>
        )
      }
}
export default Content;
