import React from 'react';
import SocialMedia from './SocialMedia.js'
import './footer.css'

class Footer extends React.Component{
  render() {
    return (
      <div className="footer container-fluid text-center">
        <SocialMedia />
      </div>
    );
  }
}
export default Footer
