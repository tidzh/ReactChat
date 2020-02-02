import React from "react";
import { connect } from "react-redux";
import { checkSessionRequest } from "../../redux/actions/auth";
import { getIsAuthorized } from "../../redux/selectors/user";
import {ProgressLine} from "../common/Progress/Progress";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.props.checkSessionRequest();
    }
    render() {
      if (this.props.isAuthorized ===null) return <ProgressLine />;
      return (
        <Component {...this.props} isAuthorized={this.props.isAuthorized} />
      );
    }
  }
  const mapStateToProps = state => {
    return {
      isAuthorized: getIsAuthorized(state)
    };
  };
  return connect(mapStateToProps, { checkSessionRequest })(WithAuthentication);
};
export default withAuthentication;
