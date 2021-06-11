import React from "react"
import './form.css'

class Mytextarea extends React.Component {
    constructor(props){
        super(props);
        }
    render () {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.title}</label>
                <textarea
                    className={[this.props.classname,"form-control"] .join(" ")}
                    name={this.props.name}
                    rows={this.props.rows}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeholder}
                />
          </div>
        );
    }
}
export default Mytextarea
