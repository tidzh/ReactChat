import React, { Component } from "react";
import UploaderMedia from "./UploaderMedia";
import { uploadAvatarRequest } from "../../../redux/actions/settings";
import { connect } from "react-redux";
import {getAuthUserId} from "../../../redux/selectors/auth";

class UploaderMediaContainer extends Component {
  state = {
    images: this.props.img
  };
  handleCapture = ({ target }) => {
    this.props.uploadAvatarRequest(target.files[0], this.props.userID);
    try {
      if (target.files.length !== 0) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = evt => {
          this.setState({ images: evt.target.result });
        };
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <UploaderMedia
        type={this.props.type}
        img={this.state.images}
        handleCapture={this.handleCapture}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    userID: getAuthUserId(state)
  };
};

export default connect(mapStateToProps, { uploadAvatarRequest })(
  UploaderMediaContainer
);
