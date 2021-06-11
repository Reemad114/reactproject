import React from "react"

class Mycheckox extends React.Component {
    constructor(props){
        super(props);
        }
    render () {
        return (
            <div className="form-group">
                <label for={this.props.name} className="form-label">
                    {this.props.title}
                </label>
                <div className="checkbox">
                    {this.props.options.map(option => {
                    return (
                        <label key={option} className="checkbox-inline">
                        <input
                            id={this.props.name}
                            name={this.props.name}
                            onChange={this.props.handleChange}
                            value={option}
                            checked={this.props.selectedOptions.indexOf(option) > -1}
                            type="checkbox"
                        />
                        {option}
                        </label>
                    );
                    })}
                </div>
            </div>
        );
    }
}
export default Mycheckox
