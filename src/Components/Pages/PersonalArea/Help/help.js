import React from 'react';
import '../content.css'

class Help extends React.Component{
  render() {
    return (
      <div className="Help justify-content-center text-center mt-2">
        <h1 className="text-center shadow mt-2">How Can I Help You</h1>
        <a id="cancelation" href="#">Change or cancel a trip </a>
        <a id="pay" href="#">Use a credit or a copun </a>
        <a id="refunds" href="#">Track your refunds </a>
      </div>
    );
  }
}
export default Help
