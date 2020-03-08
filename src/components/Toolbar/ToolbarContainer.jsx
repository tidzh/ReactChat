import React, { Component } from "react";
import Toolbar from "./Toolbar";
import { connect } from "react-redux";
import { signOutUserRequest } from "../../redux/actions/auth";
import { getAuthUserId } from "../../redux/selectors/auth";

class ToolbarContainer extends Component {
  handlerSignOut = () => {
    this.props.signOutUserRequest(this.props.authUserId);
  };

  render() {
    const { toolbarActiveTrigger, toggleToolbarActive } = this.props;
    return (
      <Toolbar
        signOut={this.handlerSignOut}
        toolbarActiveTrigger={toolbarActiveTrigger}
        toggleToolbarActive={toggleToolbarActive}
      />
    );
  }
}
const matStateToProps = state => {
  return {
    authUserId: getAuthUserId(state)
  };
};

export default connect(matStateToProps, { signOutUserRequest })(
  ToolbarContainer
);
