import React from 'react';



class HotelForm extends React.Component{
  render() {
    return (
      <div>
        <div class="form-group col-2 ml-4 mt-2">
          <select class="form-control" id="sel1" name="sellist1">
            <option class="disabled">Rooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <form class="form mx-5 mt-2 pb-4" action="#">

          <div class="row">
            <div class="col-2 mt-2">
              <input type="text" class="form-control" id="from" placeholder="Going To" name="from" />
            </div>
            <div class="col-2 mt-2">
              <input type="date" class="form-control" id="in" name="in" />
            </div>
            <div class="col-1 mt-2 text-center py-2 ">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
            <div class="col-2 mt-2">
              <input type="date" class="form-control" id="out" name="out" />
            </div>
          </div>
          <div class="row">
            <div class="col-2 mt-2">
              <button type="Search" class="btn btn-dark mb-2">Search</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}
export default HotelForm
