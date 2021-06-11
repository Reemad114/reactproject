import React from "react"
import './form.css'

class MyInput extends React.Component {
    constructor(props){
        super(props);
        }
    render () {
        return (
            <div className="form-group">
                <label for={this.props.name} className="form-label">
                    {this.props.title}
                </label>
                <input
                    className = {[this.props.classname,"form-control"] .join(" ")}
                    id={this.props.name}
                    name={this.props.name}
                    type={this.props.inputType}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeholder}
                    {...this.props}
                />
            </div>
        );
    }
}
export default MyInput
