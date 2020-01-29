import React, { Component } from "react";
import SignInPage from "./SignInPage";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getEmail, getPassword } from "../../redux/selectors/auth";
import {signInRequest} from "../../redux/actions/auth";


class SignInPageContainer extends Component {
  componentDidMount() {
    // this.props.signInRequest({email:'kondakov8@gmail.com', password:'Kondakov_90'})
  
  }
  onSubmit = formData => {
    this.props.signInUser(formData);
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
  connect(mapStateToProps, {signInRequest}),
  reduxForm({
    form: "signIn"
  })
)(SignInPageContainer);
