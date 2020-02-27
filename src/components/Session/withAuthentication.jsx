import React from "react";
import { connect } from "react-redux";
import { checkSessionRequest } from "../../redux/actions/auth";
import { getIsAuthorized, getProfileData } from "../../redux/selectors/auth";
import { ProgressLine } from "../common/Progress/Progress";
import { AppContext } from "./withAuthenticationContext";

const withAuthentication = Component => {
  class WithAuthentication extends React.PureComponent {
    componentDidMount() {
      this.props.checkSessionRequest();
    }
    render() {
      const { isAuthorized, profileData } = this.props;
      
      console.log(isAuthorized)

      if (
        isAuthorized === null ||
        (isAuthorized && Object.keys(profileData).length === 0)
      ) {
        return <ProgressLine />;
      }

      localStorage.setItem("authID", profileData.id);
      const globalContext = {
        isAuthorized: isAuthorized,
        profileData: profileData
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
      profileData: getProfileData(state)
    };
  };
  return connect(mapStateToProps, { checkSessionRequest })(WithAuthentication);
};
export default withAuthentication;
