import React from 'react';
import SocialMediaIcons from  './socialmediaitems.js'
import SocialItem from './socialmediaitem.js'
import './socialmedia.css'

class SocialMedia extends React.Component{
  render() {
    const socialComponents = SocialMediaIcons.map(item =>
        <SocialItem className = {item.className} url = {item.url}/>)
    return (
      <div className="socialmedia">
        {socialComponents}
      </div>
    );
  }
}
export default SocialMedia
