import React, { Component } from "react";
import Settings from "./Settings";
import { connect } from "react-redux";
import { signOutUserRequest } from "../../redux/actions/auth";

class SettingsContainer extends Component {
  handlerSignOut = () => {
    this.props.signOutUserRequest();
  };

  render() {
    const { settingTrigger, toggleSettings } = this.props;
    return (
      <Settings
        signOut={this.handlerSignOut}
        settingTrigger={settingTrigger}
        toggleSettings={toggleSettings}
      />
    );
  }
}

export default connect(null, { signOutUserRequest })(SettingsContainer);
