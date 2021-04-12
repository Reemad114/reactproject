import React from 'react';
import IdeasCards from './IdeasCards/ideas.js'
import Feedback from './Feedback/feedback.js'
import BestDests from './BestDests/bestdests.js'
import Discount from './discountCarousels/discount.js'
import "./content.css";

class Content extends React.Component{
  render() {
    return (
      <div className="content container" id="home-content">
        <BestDests/>
        <Discount/>
        <IdeasCards/>
        <Feedback />
      </div>

    );
  }
}
export default Content
