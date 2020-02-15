import React, { Component } from "react";
import DialogPosts from "./DialogPosts";
import { connect } from "react-redux";
import { getDialog } from "../../../redux/selectors/dialog";
class DialogPostsContainer extends Component {
  render() {
    const { dialog, photoURL } = this.props;
    if (!dialog) return false;
    return <DialogPosts dialog={dialog} photo={photoURL} />;
  }
}
const mapStateToProps = state => {
  return {
    dialog: getDialog(state)
  };
};
export default connect(mapStateToProps)(DialogPostsContainer);
