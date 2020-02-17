import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserCompanion } from "../../redux/selectors/user";
import { Dialog } from "./Dialog";
import { compose } from "redux";
import { getUserRequest } from "../../redux/actions/users";
import Chat from "../../pages/layout/Chat/Chat";
import { reduxForm } from "redux-form";
import { getDialogRequest, addNewRequest } from "../../redux/actions/dialog";
import { getAuthUserId } from "../../redux/selectors/auth";
import { dialogIsFetching, getDialog } from "../../redux/selectors/dialog";
import DialogPosts from "./DialogPosts/DialogPosts";
import { ProgressCircular } from "../common/Progress/Progress";
import DialogHeaderUser from "./DialogHeaderUser/DialogHeaderUser";
import DialogForm from "./DialogForm/DialogForm";

class DialogContainer extends Component {
  _instanceDialog() {
    this.props.getUserRequest(this.props.match.params.url);
    this.props.getDialogRequest(
      this.props.match.params.url,
      this.props.fromUid
    );
  }

  componentDidMount() {
    this._instanceDialog();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.url !== prevProps.match.params.url) {
      this._instanceDialog();
    }
  }
  onSubmit = formData => {
    this.props.addNewRequest(
      formData,
      this.props.match.params.url,
      this.props.fromUid
    );
  };

  render() {
    const {
      userCompanion,
      dialog,
      handleSubmit,
      getDialogIsFetching
    } = this.props;
    return (
      <Chat
        pageMeta={{
          title: `Диалог с пользователем ${userCompanion.displayName}`,
          description: `Диалог с пользователем ${userCompanion.displayName}`
        }}
      >
        <Dialog
          dialogHeaderUserSection={
            <DialogHeaderUser userCompanion={userCompanion} />
          }
          dialogFormSection={
            <DialogForm onSubmit={this.onSubmit} handleSubmit={handleSubmit} />
          }
          dialogPostsSection={
            getDialogIsFetching === true ? (
              <ProgressCircular />
            ) : (
              <DialogPosts dialog={dialog} userCompanion={userCompanion} />
            )
          }
        />
      </Chat>
    );
  }
}

const mapStateToProps = state => {
  return {
    fromUid: getAuthUserId(state),
    userCompanion: getUserCompanion(state),
    getDialogIsFetching: dialogIsFetching(state),
    dialog: getDialog(state)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUserRequest,
    addNewRequest,
    getDialogRequest
  }),
  reduxForm({
    form: "dialog"
  })
)(DialogContainer);
