import React, { Component } from "react";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import { getIsFetching, getUsers } from "../../../redux/selectors/users";
import { getUserRequest, getUsersRequest } from "../../../redux/actions/users";
import { ProgressCircular } from "../../common/Progress/Progress";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }
  render() {
    const { usersList, isFetching } = this.props;
    if (isFetching) return <ProgressCircular />;
    return <UsersList usersList={usersList} />;
  }
}

const mapStateToProps = state => {
  return {
    usersList: getUsers(state),
    isFetching: getIsFetching(state)
  };
};
export default connect(mapStateToProps, { getUsersRequest})(
  UsersListContainer
);
