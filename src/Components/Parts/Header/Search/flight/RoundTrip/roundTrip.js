import React from 'react';
import './roundTrip.css'

class Roundtrip extends React.Component{
  render() {
    return (
        <form className="form mx-5 mt-2 pb-4" action="#">

          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2  mt-2">
              <input type="text" className="form-control" id="from" placeholder="Leaving From" name="from"/>
            </div>
            <div className="col-1 mt-2 py-2 mx-auto">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2  mt-2">
              <input type="text" className="form-control" id="to" placeholder="Going To" name="to"/>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2  mt-2">
              <input type="date" className="form-control" id="from"  name="from"/>
            </div>
            <div className="col-1 mt-2 py-2 mx-auto">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2  mt-2">
              <input type="date" className="form-control" id="to"  name="to"/>
            </div>
          </div>
          <div className="row">
            <div className="col-2 mt-2">
              <button type="Search" className="btn btn-dark mb-2">Search</button>
            </div>
          </div>

        </form>
      )
    }
  }
export default Roundtrip
