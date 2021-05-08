import React from "react"

class UplodBtn extends React.Component{
  handleFileUpload = event => {
  console.log(event.target.files[0].name);
};
  render() {
    return(
      <React.Fragment>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
        />
        <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
      </React.Fragment>
    )
  }
}
export default UplodBtn
