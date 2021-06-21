import React from 'react';
import './hotel.css'

class Hotel extends React.Component{
  // render() {
  //   return (
  //     <form className="form mx-5 mt-2 pb-4" action="#">
  //       {
  //         this.props.data.map(formitem =>
  //           <Form item={formitem}/>
  //         )
  //       }
  //     <Button className="searchdbtn" href="#" variant="dark">SEARCH</Button>
  //     </form>
  //   )
  // }
  constructor(props) {
    super(props);
    this.state = {
      where: '',
      checkin: '',
      checkout: ''
    }
    this.handleChangeWhere = this.handleChangeWhere.bind(this);
    this.handleChangeCheckIn = this.handleChangeCheckIn.bind(this);
    this.handleChangeCheckOut = this.handleChangeCheckOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeWhere(event) {
   this.setState({from: event.target.value});
    }
    handleChangeCheckIn(event) {
   this.setState({to: event.target.value});
    }
    handleChangeCheckOut(event) {
    this.setState({depart: event.target.value});
    }

  handleSubmit =  (event) =>{
    event.preventDefault();
    let input = {
      "where": this.state.where,
      "checkin": this.state.checkin,
      "checkout": this.state.checkout
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
              <label for="where">Location:</label>
              <input 
                type="text" 
                name="where" 
                value={this.state.where}
                onChange={this.handleChangeWhere}
                class="form-control" 
                placeholder="where are you going?" 
                id="where" />
            </div>
          </div>
          <div className="row ">
            <div class="form-group mx-4">
              <label for="checkin">Chech-In:</label>
              <input 
                type="date" 
                name="checkin" 
                value={this.state.checkin}
                onChange={this.handleChangeCheckIn}
                class="form-control" 
                placeholder="" 
                id="checkin" />
            </div>
            <a className="my-auto"><i class="fas fa-arrow-right"></i></a>
            <div class="form-group mx-4">
              <label for="checkout">Chech-Out:</label>
              <input 
                type="date" 
                name="checkout" 
                value={this.state.checkout}
                onChange={this.handleChangeCheckOut}
                class="form-control" 
                placeholder="" 
                id="checkout" />
            </div>
          </div>

          <input type="submit" value="SEARCH" class="btn btn-dark" />
        </form>
      )
      }
}
export default Hotel
