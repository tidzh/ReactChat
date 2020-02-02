import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getIsFetching, getUser } from "../../redux/selectors/user";
import { Dialog } from "./Dialog";
import { compose } from "redux";
import { getUserRequest } from "../../redux/actions/users";
import Chat from "../../pages/layout/Chat/Chat";

class DialogContainer extends Component {
  componentDidMount() {
    this.props.getUserRequest(this.props.match.params.url);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.url !== prevProps.match.params.url) {
      this.props.getUserRequest(this.props.match.params.url);
    }
  }

  render() {
    const { user, isFetching } = this.props;
    return (
      <Chat>
        <Dialog user={user} isFetching={isFetching} />
      </Chat>
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
