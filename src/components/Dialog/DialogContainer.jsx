import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getIsFetching, getUser } from "../../redux/selectors/user";
import { Dialog } from "./Dialog";
import { compose } from "redux";
import { getUserRequest } from "../../redux/actions/users";
import Chat from "../../pages/layout/Chat/Chat";
import { reduxForm } from "redux-form";
import { getDialogRequest, setDialogRequest } from "../../redux/actions/dialog";
import { getAuthUserId } from "../../redux/selectors/auth";

class DialogContainer extends Component {
  componentDidMount() {
    this.props.getUserRequest(this.props.match.params.url);
    this.props.getDialogRequest(
      this.props.match.params.url,
      this.props.fromUid
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.url !== prevProps.match.params.url) {
      this.props.getUserRequest(this.props.match.params.url);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return Object.entries(this.props.user).length !== 0;
  }
  onSubmit = formData => {
    this.props.setDialogRequest(
      formData,
      this.props.match.params.url,
      this.props.fromUid
    );
  };

  render() {
    const { user, isFetching, handleSubmit } = this.props;
    return (
      <Chat
        pageMeta={{
          title: `Диалог с пользователем ${user.displayName}`,
          description: `Диалог с пользователем ${user.displayName}`
        }}
      >
        <Dialog
          user={user}
          isFetching={isFetching}
          handleSubmit={handleSubmit}
          onSubmit={this.onSubmit}
        />
      </Chat>
    );
  }
}

const mapStateToProps = state => {
  return {
    fromUid: getAuthUserId(state),
    user: getUser(state),
    isFetching: getIsFetching(state)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUserRequest,
    setDialogRequest,
    getDialogRequest
  }),
  reduxForm({
    form: "dialog"
  })
)(DialogContainer);
