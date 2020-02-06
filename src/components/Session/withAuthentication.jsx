import React from "react";
import { connect } from "react-redux";
import { checkSessionRequest } from "../../redux/actions/auth";
import {getIsAuthorized, getProfileData} from "../../redux/selectors/auth";
import { ProgressLine } from "../common/Progress/Progress";
import { AppContext } from "./withAuthenticationContext";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.props.checkSessionRequest();
    }
    componentWillUnmount() {
      this.props.checkSessionRequest();
    }

    render() {
      const { isAuthorized, profileData } = this.props;
      if (isAuthorized === null) return <ProgressLine />;

      const globalContext = {
        isAuthorized: isAuthorized,
        profileData:profileData
      };

      return (
        <AppContext.Provider value={globalContext}>
          <Component {...this.props} />
        </AppContext.Provider>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      isAuthorized: getIsAuthorized(state),
      profileData: getProfileData(state),
    };
  };
  return connect(mapStateToProps, { checkSessionRequest })(WithAuthentication);
};
export default withAuthentication;
