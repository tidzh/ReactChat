import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { getIsFetching, getUser } from "../../redux/selectors/user";
import { Dialog, DialogDefault } from "./Dialog";
import { DIALOG } from "../../constants/routes";
import { compose } from "redux";
import { getUserRequest } from "../../redux/actions/users";

class DialogContainer extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (location.pathname !== "/") {
      this.props.getUserRequest(location.pathname.slice(1));
    }
  }
  
  componentDidUpdate(prevProps) {
	const { location } = this.props;
    console.log(prevProps)
	if (prevProps.location.pathname.slice(1) !== location.pathname.slice(1)) {
	  this.props.getUserRequest(location.pathname.slice(1));
	}
  }

  render() {
    const { user } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DialogDefault} />
          <Route exact path={DIALOG}>
            <Dialog user={user} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: getUser(state),
    isFetching: getIsFetching(state)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserRequest })
)(DialogContainer);
