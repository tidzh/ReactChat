import React, { Component } from "react";
import SignInPage from "./SignInPage";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { authUser, checkToken } from "../../redux/actions/auth";
import { getEmail, getPassword } from "../../redux/selectors/auth";

class SignInPageContainer extends Component {
  onSubmit = formData => {
    this.props.authUser(formData);
  };
  render() {
    return <SignInPage {...this.props} onSubmit={this.onSubmit} />;
  }
}
const mapStateToProps = state => {
  return {
    email: getEmail(state),
    password: getPassword(state)
  };
};
export default compose(
  connect(mapStateToProps, { checkToken, authUser }),
  reduxForm({
    form: "signIn"
  })
)(SignInPageContainer);
