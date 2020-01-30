import React, { Component } from "react";
import ConfirmPage from "./ConfirmPage";
import { connect } from "react-redux";
import { emailVerificationRequest } from "../../redux/actions/auth";

class ConfirmPageContainer extends Component {
  componentDidMount() {
    // this.props.emailVerificationRequest('kondakov8@gmail.com')
  }
  render() {
    return <ConfirmPage />;
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(ConfirmPageContainer);
