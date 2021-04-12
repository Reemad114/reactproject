import React from 'react';

class CarForm extends React.Component{
  render() {
    return (
      <form className="form mx-5 mt-2 pb-4" action="#">
        <div className="row">
          <div className="col-2 mt-2">
            <input
             type="text"
             className="form-control"
             id="pickup"
             placeholder="Pick Up"
             name="pick-up"
             />
          </div>
          <div className="col-1 mt-2 text-center py-2 ">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="col-2 mt-2">
            <input type="text" className="form-control" id="dropoff" placeholder="Drop Off" name="drop-off" />
          </div>
          <div class="col-2 mt-2">
            <input type="date" className="form-control" id="pickupd" placeholder="pick up date" name="pick up d" />
          </div>
          <div className="col-1 mt-2 text-center py-2 ">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="col-2 mt-2">
            <input type="date" className="form-control" id="pickupd" placeholder="pick up date" name="pick up d" />
          </div>
        </div>
        <div className="row">
          <div className="col-2 mt-2">
            <input type="time" className="form-control" id="pickupt" placeholder="pick up time" name="pick up t" />
          </div>
          <div className="col-1 mt-2 text-center py-2 ">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="col-2 mt-2">
            <input type="time" class="form-control" id="dropofft" placeholder="drop off time" name="drop off t" />
          </div>
        </div>
        <div className="row">
          <div className="col-2 mt-2">
            <button type="Search" className="btn btn-dark mb-2">Search</button>
          </div>
        </div>
      </form>

    );
  }
}
export default CarForm
