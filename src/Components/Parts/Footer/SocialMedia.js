import React from 'react';
import SocialMediaIcons from  './socialmediaitems.js'
import SocialItem from './socialmediaitem.js'
import './socialmedia.css'

class SocialMedia extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const socialComponents = this.props.data.map(item =>
        <SocialItem className = {item.className} url = {item.url} icon={item.icon}/>)
    return (
      <div className="socialmedia">
        {socialComponents}
      </div>
    );
  }
}
export default SocialMedia
