import React from "react"
import './form.css'

class MySelect extends React.Component {
    constructor(props){
        super(props);
        }
    render () {
        return (
            <div className="form-group">
                <label for={this.props.name}> {this.props.title} </label>
                <select
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    className="form-control"
                >
                    <option value="" disabled>
                    {this.props.placeholder}
                    </option>
                    {this.props.options.map(option => {
                        return (
                            <option key={option} value={option} label={option}>
                            {option}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}
export default MySelect
