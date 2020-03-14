import React, { Component } from "react";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import {
  getCurrentUsers,
  getIsFetching,
  getIsFetchingDialogUser,
  getUsersListDialogs
} from "../../redux/selectors/users";
import {
  getUsersDialogRequest,
  getUsersRequest
} from "../../redux/actions/users";
import { ProgressCircular } from "../common/Progress/Progress";
import { getAuthUserId } from "../../redux/selectors/auth";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsersRequest(this.props.fromUid);
    this.props.getUsersDialogRequest(this.props.fromUid);
  }
  render() {
    const {
      usersList,
      isFetching,
      isFetchingDialogUser,
      usersListDialogs,
      userListType
    } = this.props;
    if (!isFetching && !isFetchingDialogUser) return <ProgressCircular />;
    return (
      <UsersList
        usersList={userListType === "userDialog" ? usersListDialogs : usersList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    fromUid: getAuthUserId(state),
    usersList: getCurrentUsers(state),
    usersListDialogs: getUsersListDialogs(state),
    isFetching: getIsFetching(state),
    isFetchingDialogUser: getIsFetchingDialogUser(state)
  };
};
export default connect(mapStateToProps, {
  getUsersRequest,
  getUsersDialogRequest
})(UsersListContainer);
