import React from 'react';
import './about-us.css'

class Content extends React.Component{
  render() {
    return (
      <div id="contentabout" class="container my-5 ">
        <div id="ourstory" class="shadow col-12 pt-5 px-5">
          <h3 class="H text-center my-3">"Travel is my therapy"</h3>
          <div class="text my-5"> Here at SykCruise, we beleive that "The world is a book and
              those who do not travel read only one page."
              We are here since 2010. Dedicated to
              making travel as simple as possible, we help each and every
              one of them find the best options across flights,
              hotels, and car rentals to book the perfect trip.
              One thing is for sure SkyCruise can help you save big on your next trip.
         </div>
        </div>
      </div>
    )
  }
}
export default Content;
