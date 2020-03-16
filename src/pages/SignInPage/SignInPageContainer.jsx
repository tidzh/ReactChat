import React, { Component } from "react";
import SignInPage from "./SignInPage";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signInRequest } from "../../redux/actions/auth";
import { getIsFetchingUser } from "../../redux/selectors/user";
import { getEmail } from "../../redux/selectors/auth";

class SignInPageContainer extends Component {
  onSubmit = formData => {
    this.props.signInRequest(formData);
  };
  render() {
    return <SignInPage {...this.props} onSubmit={this.onSubmit} />;
  }
}
const mapStateToProps = state => {
  return {
    email: getEmail(state),
    isFetching: getIsFetchingUser(state)
  };
};
export default compose(
  connect(mapStateToProps, { signInRequest }),
  reduxForm({
    form: "signIn"
  })
)(SignInPageContainer);
