import React, { Component } from "react";
import SignInPage from "./SignInPage";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signInRequest } from "../../redux/actions/auth";
import { getEmail, getIsFetching } from "../../redux/selectors/user";
import { ProgressCircular } from "../../components/common/Progress/Progress";

class SignInPageContainer extends Component {
  onSubmit = formData => {
    this.props.signInRequest(formData);
  };
  render() {
    const { isFetching } = this.props;
    if (isFetching) return <ProgressCircular />;
    return <SignInPage {...this.props} onSubmit={this.onSubmit} />;
  }
}
const mapStateToProps = state => {
  return {
    email: getEmail(state),
    isFetching: getIsFetching(state)
  };
};
export default compose(
  connect(mapStateToProps, { signInRequest }),
  reduxForm({
    form: "signIn"
  })
)(SignInPageContainer);
