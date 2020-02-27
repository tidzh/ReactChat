import React, { Component } from "react";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import {getCurrentUsers, getIsFetching} from "../../../redux/selectors/users";
import {getLastMessageRequest, getUsersRequest} from "../../../redux/actions/users";
import { ProgressCircular } from "../../common/Progress/Progress";
import {getAuthUserId} from "../../../redux/selectors/auth";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsersRequest(this.props.fromUid);
  }
  render() {
    const { usersList, isFetching } = this.props;
    if (isFetching) return <ProgressCircular />;
    return <UsersList usersList={usersList} />;
  }
}

const mapStateToProps = state => {
  return {
    fromUid: getAuthUserId(state),
    usersList: getCurrentUsers(state),
    isFetching: getIsFetching(state)
  };
};
export default connect(mapStateToProps, { getUsersRequest, getLastMessageRequest })(
  UsersListContainer
);
