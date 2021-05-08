import React from 'react';
import Card from '../../General/Card/card.js'

class Gallery extends React.Component{
  render() {
    return(
        <div>
          {this.props.data.map(singleitem =>
            <Card item={singleitem}/>
          )}
        </div>
    );
  }
}
export default Gallery;
