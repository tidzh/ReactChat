import React, { Component } from "react";
import Toolbar from "./Toolbar";
import { connect } from "react-redux";
import { signOutUserRequest } from "../../redux/actions/auth";
import { getAuthUserId } from "../../redux/selectors/auth";
import {getLastMessagesUsers} from "../../redux/selectors/users";

class ToolbarContainer extends Component {
  handlerSignOut = () => {
    this.props.signOutUserRequest(this.props.authUserId);
  };

  render() {
    const { toolbarActiveTrigger, toggleToolbarActive, countUserDialogs } = this.props;
    return (
      <Toolbar
        signOut={this.handlerSignOut}
        toolbarActiveTrigger={toolbarActiveTrigger}
        toggleToolbarActive={toggleToolbarActive}
        countUserDialogs={countUserDialogs}
      />
    );
  }
}
const matStateToProps = state => {
  return {
    authUserId: getAuthUserId(state),
    countUserDialogs:getLastMessagesUsers(state),
  };
};

export default connect(matStateToProps, { signOutUserRequest })(
  ToolbarContainer
);
