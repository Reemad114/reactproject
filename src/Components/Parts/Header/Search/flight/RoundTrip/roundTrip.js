import React from 'react';
import './roundTrip.css'

class Roundtrip extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to:'',
      depart: '',
      return: ''
    }
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleChangeDepart = this.handleChangeDepart.bind(this);
    this.handleChangeReturn = this.handleChangeReturn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeFrom(event) {
   this.setState({from: event.target.value});
    }
  handleChangeTo(event) {
   this.setState({to: event.target.value});
    }
  handleChangeDepart(event) {
    this.setState({depart: event.target.value});
    }
  handleChangeReturn(event) {
    this.setState({return: event.target.value});
    }
  handleSubmit =  (event) =>{
    event.preventDefault();
    let input = {
      "from": this.state.from,
      "to": this.state.to,
      "depart": this.state.depart,
      "return": this.state.return
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
              <label for="from">Leaving From:</label>
              <input 
                type="text" 
                name="from" 
                value={this.state.from}
                onChange={this.handleChangeFrom}
                class="form-control" 
                placeholder="" 
                id="from" />
            </div>
            <a className="my-auto"><i className="fas fa-exchange-alt"></i></a>
            <div class="form-group mx-4">
              <label for="to">Going To:</label>
              <input 
                type="text" 
                name="to" 
                value={this.state.to}
                onChange={this.handleChangeTo}
                class="form-control" 
                placeholder="" 
                id="to" />
            </div>
          </div>

          <div className="row ">
            <div class="form-group mx-4">
              <label for="depart">Departure:</label>
              <input 
                type="date" 
                name="depart" 
                value={this.state.depart}
                onChange={this.handleChangeDepart}
                class="form-control" 
                placeholder="" 
                id="depart" />
            </div>
            <a className="my-auto"><i className="fas fa-exchange-alt"></i></a>
            <div class="form-group mx-4">
              <label for="return">Return:</label>
              <input 
                type="date" 
                name="return" 
                value={this.state.return}
                onChange={this.handleChangeReturn}
                class="form-control" 
                placeholder="" 
                id="return" />
            </div>
          </div>
          <input type="submit" value="SEARCH" class="btn btn-dark" />
        </form>
      )
      }
  }
export default Roundtrip
