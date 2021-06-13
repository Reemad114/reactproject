import React from 'react';
import Brochure from './brochure'
import './content.css'

class Content extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="contest container">
        <h2>Upload Your Brochure Here :</h2>
        <form action="/contest/store-img" method="POST">
          <input type="file" name="image"></input>
          <button type="submit">Upload</button>
        </form>
        <h2>Participants Brochures</h2>
        <div className="brochures">
          {this.props.data.map(item=>
            <Brochure
              data={item}
            />
            )}
        </div>
      </div>
    );
  }
}
export default Content;
