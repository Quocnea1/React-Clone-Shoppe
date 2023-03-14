import React, { Component } from "react";
import "./ImageUploaderForm.scss";
// import axios from 'axios'

export class ImageUploaderForm extends Component {
  // fileUploader = (event) => {
  //     /**
  //      * đừng có xóa :( test handler cho cái axios đã
  //      * -Huy-
  //      */
  //     // axios.post(`${this.props.url}/uploader`, this.props.url);
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //         fileReader.readyState === 2
  //             ? this.setState({ selectedFile: fileReader.result.file })
  //             : this.setState({ selectedFile: this.defaultImage });
  //     }
  //     // fileReader.readAsDataURL(this.props.url);
  //     fileReader.readAsDataURL(event.target.files[0]);

  // }
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      fileReader.readyState === 2
        ? this.setState({ profileImg: fileReader.result })
        : this.setState({
            profileImg:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          });
    };
    fileReader.readAsDataURL(event.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="imageUploaderForm">
        <div className="imageUploaderSection">
          <div className="imgWrapper">
            <figure className="imageContainer">
              <img src={profileImg} alt="" id="img" className="img" />
            </figure>
            <label htmlFor="input" className="custom-file-upload">
              Upload Ảnh
            </label>
            <input
              type="file"
              accept="image/*"
              className="imageBtn"
              id="input"
              onChange={this.imageHandler}
            />
          </div>
        </div>
        <p className="underText"> Dụng lượng file tối đa 1MB</p>
        <p className="underText"> Định dạng: .JEG,.PNG</p>
      </div>
    );
  }
}
export default ImageUploaderForm;
