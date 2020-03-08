import React, { Component } from "react";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import {
  getCurrentUsers,
  getIsFetching,
  getIsFetchingDialogUser
} from "../../redux/selectors/users";
import {
  getUsersDialogRequest,
  getUsersRequest
} from "../../redux/actions/users";
import { ProgressCircular } from "../common/Progress/Progress";
import { getAuthUserId } from "../../redux/selectors/auth";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsersDialogRequest(this.props.fromUid);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.lastDialog !== prevProps.lastDialog) {
      if (this.props.lastDialog === true) {
        this.props.getUsersDialogRequest(this.props.fromUid);
      } else {
        this.props.getUsersRequest();
      }
    }
  }
  render() {
    const { usersList, isFetching, isFetchingDialogUser } = this.props;
    if (!isFetching && !isFetchingDialogUser) return <ProgressCircular />;
    return <UsersList usersList={usersList} />;
  }
}

const mapStateToProps = state => {
  return {
    fromUid: getAuthUserId(state),
    usersList: getCurrentUsers(state),
    isFetching: getIsFetching(state),
    isFetchingDialogUser: getIsFetchingDialogUser(state)
  };
};
export default connect(mapStateToProps, {
  getUsersRequest,
  getUsersDialogRequest
})(UsersListContainer);
