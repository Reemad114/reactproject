import React from 'react';
import UplodBtn from '../../General/UploadFile/upload.js'
import Gallery from './gallery.js'
import './content.css'

class Content extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <div className="text-center m-5">
          <h2 className="shadow mt-2">Upload Your File Here</h2>
          <UplodBtn/>
        </div>
        {/* <div className="text-center m-5">
          <h2 className="shadow mt-2">Users Creativity</h2>
          <Gallery data={this.props.data}/>
        </div> */}
      </div>
    );
  }
}
export default Content;
