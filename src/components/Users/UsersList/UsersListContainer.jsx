import React, {Component} from "react";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {getUsers} from "../../../redux/selectors/users";

class UsersListContainer extends Component {
  render() {
    const {usersList} = this.props;
    return <UsersList usersList={usersList}/>
  }
}

const mapStateToProps = state => {
  return {
    usersList: getUsers(state)
  }
  
};
export default connect(mapStateToProps)(UsersListContainer)