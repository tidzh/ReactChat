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
  getAllUsersRequest,
  getUsersDialogRequest
} from "../../redux/actions/users";
import { ProgressCircular } from "../common/Progress/Progress";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getAllUsersRequest();
    this.props.getUsersDialogRequest(this.props.fromUid);
  }
  componentWillUnmount() {
    this.props.getAllUsersRequest();
    this.props.getUsersDialogRequest(this.props.fromUid);
  }
  render() {
    const {
      usersList,
      isFetching,
      isFetchingDialogUser,
      usersListDialogs,
      userListType,
    } = this.props;
    if (!isFetching && !isFetchingDialogUser)
      return <ProgressCircular />;
    return (
      <UsersList
        usersList={userListType === "userDialog" ? usersListDialogs : usersList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    usersList: getCurrentUsers(state),
    usersListDialogs: getUsersListDialogs(state),
    isFetching: getIsFetching(state),
    isFetchingDialogUser: getIsFetchingDialogUser(state)
  };
};
export default connect(mapStateToProps, {
  getAllUsersRequest,
  getUsersDialogRequest
})(UsersListContainer);
