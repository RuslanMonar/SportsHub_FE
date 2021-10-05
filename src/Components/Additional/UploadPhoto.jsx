import React, { Component } from "react";
import"../../css/photo.css"
export class UploadPhoto extends Component {
  state = {
    profileImg:
    "./Ellipse.svg"
  };
  imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="container2">
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
            <img
          src="./upload.svg"
          alt="Example1"
          width="40"
          height="40"
          />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPhoto ;