import React from 'react';
import './multiCity.css'

class MultiCity extends React.Component{
  render() {
    return (
      <form className="form mx-5 mt-2 pb-4" action="#">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 mt-2">
            <input type="text" className="form-control" id="from" placeholder="Leaving From" name="from"/>
          </div>
          <div className="col-1 mt-2 text-center py-2 ">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 mt-2">
            <input type="text" className="form-control" id="to" placeholder="Going To" name="to"/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 mt-2">
            <input type="date" className="form-control" id="from" name="from"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 mt-2">
            <input type="text" className="form-control" id="from" placeholder="Leaving From" name="from"/>
          </div>
          <div className="col-1 mt-2 text-center py-2 ">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 mt-2">
            <input type="text" className="form-control" id="to" placeholder="Going To" name="to"/>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 mt-2">
            <input type="date" className="form-control" id="from" name="from"/>
          </div>
        </div>
        <div className="row">
          <div className="col-2 mt-2">
            <i className="fas fa-plus">Add Flight</i>
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
export default MultiCity
