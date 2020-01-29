import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { registerRequest } from "../../redux/actions/auth";
import { getEmail, getIsAuth, getPassword } from "../../redux/selectors/auth";

class SignUpPageContainer extends Component {
  onSubmit = formData => {
    this.props.registerRequest(formData);
  };
  render() {
    return <SignUpPage {...this.props} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => {
  return {
    email: getEmail(state),
    password: getPassword(state),
    isAuth: getIsAuth(state)
  };
};

export default compose(
  connect(mapStateToProps, { registerRequest }),
  reduxForm({
    form: "signUp"
  })
)(SignUpPageContainer);
