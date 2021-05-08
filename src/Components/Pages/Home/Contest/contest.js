import React from 'react';
import Button from 'react-bootstrap/Button';
import './contest.css'

class Contest extends React.Component {

  render() {
    console.log(this.props.data)
    return (
      <div className="contest mt-4">
        <h2 className="text-center mt-2 mb-4 shadow py-2">Dont Miss Your Chance To Be A Winner</h2>
        <h3 className={this.props.data.TclassN}> {this.props.data.Ttitle}</h3>
        <Button className="contbtn" href={this.props.data.href} variant={this.props.data.btnClassN}>{this.props.data.btn}</Button>
        <div className="contestBody row mt-3">
          <div className="contestCinditions col-4 ml-4 py-5">
            <h4 className="condTitle"><b>{this.props.data.CondTitle}</b></h4>
            <p>{this.props.data.CondDescrip}</p>
          </div>
          <img  className="contestImg mx-2" src={this.props.data.imgsrc} alt={this.props.data.imgalt}/>
          <div className="contestAwards col-4 py-5">
          <h4 className="awardsTitle ml-4"><b>{this.props.data.AwardTitle}</b></h4>
            <ul>
              <li>{this.props.data.a1}</li>
              <li>{this.props.data.a2}</li>
              <li>{this.props.data.a3}</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
export default Contest;
