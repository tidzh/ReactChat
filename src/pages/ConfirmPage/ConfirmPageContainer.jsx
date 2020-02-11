import React, { Component } from "react";
import ConfirmPage from "./ConfirmPage";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { HOME, SIGN_UP } from "../../constants/routes";
import {getEmail, getIsAuthorized, getIsRegistered} from "../../redux/selectors/auth";

class ConfirmPageContainer extends Component {
  render() {
    const { email, isAuthorized, isRegistered } = this.props;
    if (isAuthorized) {
      return <Redirect to={HOME} />;
    } else if (!isRegistered) {
      return <Redirect to={SIGN_UP} />;
    }
    return <ConfirmPage email={email} />;
  }
}
const mapStateToProps = state => {
  return {
    email: getEmail(state),
    isAuthorized: getIsAuthorized(state),
    isRegistered: getIsRegistered(state)
  };
};
export default connect(mapStateToProps, {})(ConfirmPageContainer);
