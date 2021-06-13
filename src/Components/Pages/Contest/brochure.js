import React from 'react';

class Brochure extends React.Component{
    constructor(props){
        super(props)
      }
      render() {
        return(
            <div className="brochure">
                {/* <h3>{this.props.data.username}</h3> */}
                <img id={this.props.data.id} src={this.props.data.file_name} />
                <a><i class="far fa-heart"></i></a>
            </div>
            );
        }   
    }
export default Brochure;
      