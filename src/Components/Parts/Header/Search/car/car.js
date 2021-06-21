import React from 'react';
import Form from '../../../../General/Form/form.js'
import Button from 'react-bootstrap/Button';
import './car.css'

class Car extends React.Component{
  // render() {
  //   return (
  //     <form className="form mx-5 mt-2 pb-4" action="#">
  //       {
  //         this.props.data.map(formitem =>
  //           <Form item={formitem}/>
  //         )
  //       }
  //       <Button className="searchdbtn" href="#" variant="dark">SEARCH</Button>
  //     </form>
  //   )
  // }
  constructor(props) {
    super(props);
    this.state = {
      pickup: '',
      dropoff: '',
      startdate: '',
      enddate: '',
      starttime: '',
      endtime: '',
    }
    this.handleChangePickUp = this.handleChangePickUp.bind(this);
    this.handleChangeDropOff = this.handleChangeDropOff.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangePickUp(event) {
   this.setState({pickup: event.target.value});
    }
  handleChangeDropOff(event) {
  this.setState({dropoff: event.target.value});
  }
  handleChangeStartDate(event) {
  this.setState({startdate: event.target.value});
  }
  handleChangeEndDate(event) {
    this.setState({enddate: event.target.value});
  }
  handleChangeStartTime(event) {
    this.setState({starttime: event.target.value});
  }
  handleChangeEndTime(event) {
    this.setState({endtime: event.target.value});
  }

  handleSubmit =  (event) =>{
    event.preventDefault();
    let input = {
      "pickup": this.state.pickup,
      "dropoff": this.state.dropoff,
      "startdate": this.state.startdate,
      "enddate": this.state.enddate,
      "starttime": this.state.starttime,
      "endtime": this.state.endtime
    }
    fetch('/users/create',
    {
      method: 'POST',
      body: JSON.stringify({input}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({input:json}));

    const body = this.state.input
    this.setState({ dataResponse: body.msg});
    console.log("respond body" + body.user)
  }
  render() {
    return (
        <form className="form mx-5 mt-2 pb-4" onSubmit={this.handleSubmit}>
          <div className="row ">
            <div class="form-group mx-4">
              <label for="pickup">Pick Up:</label>
              <input 
                type="text" 
                name="pickup" 
                value={this.state.pickup}
                onChange={this.handleChangePickUp}
                class="form-control" 
                placeholder="Pick Up" 
                id="pickup" />
            </div>
            <a className="my-auto"><i class="fas fa-arrow-right"></i></a>
            <div class="form-group mx-4">
              <label for="dropoff">Drop Off:</label>
              <input 
                type="date" 
                name="dropoff" 
                value={this.state.dropoff}
                onChange={this.handleChangeDropOff}
                class="form-control" 
                placeholder="Drop Off" 
                id="dropoff" />
            </div>
          </div>

          <div className="row ">
            <div class="form-group mx-4">
              <label for="startdate">Start Date:</label>
              <input 
                type="date" 
                name="startdate" 
                value={this.state.startdate}
                onChange={this.handleChangeStartDate}
                class="form-control" 
                placeholder="" 
                id="startdate" />
            </div>
            <a className="my-auto"><i class="fas fa-arrow-right"></i></a>
            <div class="form-group mx-4">
              <label for="enddate">End Date:</label>
              <input 
                type="date" 
                name="enddate" 
                value={this.state.enddate}
                onChange={this.handleChangeEndDate}
                class="form-control" 
                placeholder="" 
                id="enddate" />
            </div>
          </div>

          <div className="row ">
            <div class="form-group mx-4">
              <label for="starttime">Start Time:</label>
              <input 
                type="time" 
                name="starttime" 
                value={this.state.starttime}
                onChange={this.handleChangeStartTime}
                class="form-control" 
                placeholder="" 
                id="starttime" />
            </div>
            <a className="my-auto"><i class="fas fa-arrow-right"></i></a>
            <div class="form-group mx-4">
              <label for="endtime">End Time:</label>
              <input 
                type="time" 
                name="endtime" 
                value={this.state.endtime}
                onChange={this.handleChangeEndTime}
                class="form-control" 
                placeholder="" 
                id="endtime" />
            </div>
          </div>
          <input type="submit" value="SEARCH" class="btn btn-dark" />
        </form>
      )
      }
}
export default Car
