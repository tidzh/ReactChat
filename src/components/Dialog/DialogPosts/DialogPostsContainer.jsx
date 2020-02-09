import React, { Component } from "react";
import DialogPosts from "./DialogPosts";
import {connect} from "react-redux";
import {getDialog} from "../../../redux/selectors/dialog";
class DialogPostsContainer extends Component {
  render() {
    const {dialog} = this.props;
    return <DialogPosts dialog={dialog} />;
  }
}
const mapStateToProps = (state) => {
  return {
    dialog: getDialog(state)
  }
};
export default connect(mapStateToProps)(DialogPostsContainer);
