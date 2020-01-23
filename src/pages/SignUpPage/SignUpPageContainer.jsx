import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { authUser, checkToken } from "../../redux/actions/auth";
import { getEmail, getIsAuth, getPassword } from "../../redux/selectors/auth";

class SignUpPageContainer extends Component {
  onSubmit = formData => {
    this.props.authUser(formData);
  };
  render() {
    // if (this.props.isAuth) return <Redirect to="/admin" />;
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
  connect(mapStateToProps, { checkToken, authUser }),
  reduxForm({
    form: "auth"
  })
)(SignUpPageContainer);
