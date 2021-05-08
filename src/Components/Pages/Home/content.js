import React from 'react';
import Contest from './Contest/contest.js'
import IdeasCards from './IdeasCards/ideas.js'
import Feedback from './Feedback/feedback.js'
import BestDests from './BestDests/bestdests.js'
import Discount from './discountCarousels/discount.js'
import "./content.css";

class Content extends React.Component{
  render() {
    return (
      <div className="content container" id="home-content">
        <Contest data = {this.props.data.Contest}/>
        <BestDests data = {this.props.data.Destinations}/>
        <Discount data = {this.props.data.Discounts}/>
        <IdeasCards data = {this.props.data.Ideas}/>
        <Feedback data = {this.props.data.Feedback}/>
      </div>

    );
  }
}
export default Content
