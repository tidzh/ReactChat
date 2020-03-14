import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserCompanion } from "../../redux/selectors/user";
import { Dialog } from "./Dialog";
import { getUserRequest } from "../../redux/actions/users";
import Chat from "../../pages/layout/Chat/Chat";
import {
  getDialogHistoryRequest,
  addNewMessageRequest
} from "../../redux/actions/dialog";
import { getAuthUserId } from "../../redux/selectors/auth";
import {
  dialogIsFetching,
  getDialog
} from "../../redux/selectors/dialogHistory";
import DialogHistory from "./DialogHistory/DialogHistory";
import { ProgressCircular } from "../common/Progress/Progress";
import DialogHeaderUser from "./DialogHeaderUser/DialogHeaderUser";
import DialogForm from "./DialogForm/DialogForm";
import style from "./Dialog.module.scss";
import { dialogListenerRequest } from "../../redux/actions/listeners";

class DialogContainer extends Component {
  state = {
    dialogForm: "",
    emojiHide: false
  };

  _instanceDialog() {
    this.props.getUserRequest(this.props.match.params.url);
    this.props.getDialogHistoryRequest(
      this.props.match.params.url,
      this.props.fromUid
    );
    this.props.dialogListenerRequest(
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

  onSubmit = evt => {
    evt.preventDefault();
    this.props.addNewMessageRequest(
      this.state.dialogForm,
      this.props.match.params.url,
      this.props.fromUid
    );
    this.setState({ dialogForm: "" });
  };
  handleChange = evt => {
    this.setState({ dialogForm: evt.target.value });
  };
  getEmoji = emoji => {
    this.setState({
      dialogForm: this.state.dialogForm + emoji
    });
  };
  emojiTriggerHide = () => {
    this.setState({ emojiHide: !this.state.emojiHide });
  };

  render() {
    const { userCompanion, dialog, getDialogIsFetching } = this.props;
    return (
      <Chat
        pageMeta={{
          title: `Диалог с пользователем ${userCompanion.displayName}`,
          description: `Диалог с пользователем ${userCompanion.displayName}`
        }}
      >
        <Dialog
          emojiTriggerHide={this.emojiTriggerHide}
          dialogHistoryUserSection={
            <DialogHeaderUser userCompanion={userCompanion} />
          }
          dialogFormSection={
            <DialogForm
              onSubmit={this.onSubmit}
              handleChange={this.handleChange}
              dialogValue={this.state.dialogForm}
              getEmoji={this.getEmoji}
              emojiHide={this.state.emojiHide}
            />
          }
          dialogHistorySection={
            !getDialogIsFetching ? (
              <div className={style.content}>
                <ProgressCircular className={style.progressCenter} />
              </div>
            ) : (
              <DialogHistory
                emojiTrigger={this.emojiTrigger}
                dialog={dialog}
                userCompanion={userCompanion}
              />
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

export default connect(mapStateToProps, {
  getUserRequest,
  addNewMessageRequest,
  getDialogHistoryRequest,
  dialogListenerRequest
})(DialogContainer);
