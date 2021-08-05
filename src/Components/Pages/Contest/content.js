import React from 'react';
import axios from 'axios';
import './content.css'

class Content extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

  this.uploadHandler = this.uploadHandler.bind(this);
  }

  uploadHandler(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('/upload', data)
      .then((res) => {
        this.setState({ photos: [res.data, ...this.state.photos] });
      });
  }

  render() {
    return  (
      <div id="contestcontent" className="container">
        <div className="mt-2">
          <h1 className="text-center">Welcome To The Brochure Contest</h1>
          <div className="text-center">
            <input type="file" name="file" onChange={this.uploadHandler}/>
          </div>
        </div>
        <div className="mt-2">
        {this.state.photos.map(photo => (
          <img src={`http://localhost:3000/${photo.filename}`} />
        ))}

          <img src="../../../images/family.jpg"/>
          <img src="../../../images/family.jpg"/>
          <img src="../../../images/family.jpg"/>
          <img src="../../../images/family.jpg"/>
        </div>
      </div>
    )
  }
}

export default Content;
