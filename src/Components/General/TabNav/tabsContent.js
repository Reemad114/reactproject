import React from 'react';

class TabNavContent extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="tab-content">
        {this.props.tabscontent}
      </div>
    );
  }
}
export default TabNavContent
