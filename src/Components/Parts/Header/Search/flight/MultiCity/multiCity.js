import React from 'react';
import Button from 'react-bootstrap/Button';
import './multiCity.css'

class MultiCity extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      from1: '',
      to1:'',
      depart1: '',
      from2: '',
      to2:'',
      depart2: '',
    }
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleChangeDepart = this.handleChangeDepart.bind(this);
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
     handleSubmit =  (event) =>{
      event.preventDefault();
      let input = {
        "from1": this.state.from1,
        "to1": this.state.to1,
        "depart1": this.state.depart1,
        "from2": this.state.from2,
        "to2": this.state.to2,
        "depart2": this.state.depart2
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
                <label for="from1">Leaving From:</label>
                <input 
                  type="text" 
                  name="from1" 
                  value={this.state.from1}
                  onChange={this.handleChangeFrom}
                  class="form-control" 
                  placeholder="" 
                  id="from1" />
              </div>
              <a className="my-auto"><i class="fas fa-arrow-right"></i></a>
              <div class="form-group mx-4">
                <label for="to1">Going To:</label>
                <input 
                  type="text" 
                  name="to1" 
                  value={this.state.to}
                  onChange={this.handleChangeTo}
                  class="form-control" 
                  placeholder="" 
                  id="to1" />
              </div>
              <div class="form-group mx-4">
                <label for="depart1">Departure:</label>
                <input 
                  type="date" 
                  name="depart1" 
                  value={this.state.depart1}
                  onChange={this.handleChangeDepart}
                  class="form-control" 
                  placeholder="" 
                  id="depart1" />
              </div>
            </div>
  
            <div className="row ">
            <div class="form-group mx-4">
                <label for="from2">Leaving From:</label>
                <input 
                  type="text" 
                  name="from2" 
                  value={this.state.from2}
                  onChange={this.handleChangeFrom}
                  class="form-control" 
                  placeholder="" 
                  id="from2" />
              </div>
              <a className="my-auto"><i class="fas fa-arrow-right"></i></a>
              <div class="form-group mx-4">
                <label for="to2">Going To:</label>
                <input 
                  type="text" 
                  name="to2" 
                  value={this.state.to2}
                  onChange={this.handleChangeTo}
                  class="form-control" 
                  placeholder="" 
                  id="to2" />
              </div>
              <div class="form-group mx-4">
                <label for="depart2">Departure:</label>
                <input 
                  type="date" 
                  name="depart2" 
                  value={this.state.depart2}
                  onChange={this.handleChangeDepart}
                  class="form-control" 
                  placeholder="" 
                  id="depart2" />
              </div>
            </div>
            <a><i class="fas fa-plus-square"></i>Add a Flight</a><br/>

            <input type="submit" value="SEARCH" class="btn btn-dark" />
          </form>
        )
      }
    }
export default MultiCity
