import React from "react";
import { connect } from "react-redux";
import { checkSessionRequest } from "../../redux/actions/auth";
import { getIsAuthorized, getProfileData } from "../../redux/selectors/auth";
import { AppContext } from "./withAuthenticationContext";
import { ProgressLine } from "../common/Progress/Progress";
import { usersDialogsCount } from "../../redux/selectors/users";

const mapStateToProps = state => {
  return {
    isAuthorized: getIsAuthorized(state),
    profileData: getProfileData(state),
    usersDialogsCount: usersDialogsCount(state)
  };
};

const withAuthentication = Component => {
  class WithAuthenticationComponent extends React.PureComponent {
    componentDidMount() {
      this.props.checkSessionRequest();
    }
    componentDidUpdate(prevProps) {
      if (this.props.isAuthorized !== prevProps.isAuthorized) {
        this.props.checkSessionRequest();
      }
    }
    componentWillUnmount() {
      this.props.checkSessionRequest();
    }
    render() {
      const { isAuthorized, profileData, usersDialogsCount } = this.props;
      if (isAuthorized === null) {
        return <ProgressLine />;
      }

      const globalContext = {
        isAuthorized: isAuthorized,
        profileData: profileData,
        usersDialogsCount: usersDialogsCount
      };
      return (
        <AppContext.Provider value={globalContext}>
          <Component {...this.props} />
        </AppContext.Provider>
      );
    }
  }
  return connect(mapStateToProps, { checkSessionRequest })(
    WithAuthenticationComponent
  );
};
export default withAuthentication;
