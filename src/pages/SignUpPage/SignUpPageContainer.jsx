import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import { CONFIRM } from "../../constants/routes";
import { registerRequest } from "../../redux/actions/auth";
import {getIsAuthorized, getIsFetching, getIsRegistered} from "../../redux/selectors/user";

class SignUpPageContainer extends Component {
  onSubmit = formData => {
    this.props.registerRequest(formData);
  };
  render() {
    const { isRegistered } = this.props;
    if (isRegistered) return <Redirect to={CONFIRM} />;
    return <SignUpPage {...this.props} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: getIsRegistered(state),
    isFetching: getIsFetching(state),
    isAuthorized: getIsAuthorized(state)
  };
};

export default compose(
  reduxForm({
    form: "signUp"
  }),
  connect(mapStateToProps, { registerRequest })
)(SignUpPageContainer);
