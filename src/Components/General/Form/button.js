import React from "react"
import './form.css'

class MyButton extends React.Component {
    constructor(props){
        super(props);
        }
    render () {
        return (
            <button
                className={
                this.props.type == "dark" ? "btn btn-dark" : "btn btn-secondary"
                }
                onClick={this.props.action}
            >
                {this.props.title}
            </button>
        );
    }
}
export default MyButton
