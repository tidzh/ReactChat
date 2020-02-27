import React, {Component} from "react";
import { connect } from "react-redux";
import { getUserCompanion } from "../../redux/selectors/user";
import { Dialog } from "./Dialog";
import { getUserRequest } from "../../redux/actions/users";
import Chat from "../../pages/layout/Chat/Chat";
import {getDialogRequest, addNewRequest} from "../../redux/actions/dialog";
import { getAuthUserId } from "../../redux/selectors/auth";
import { dialogIsFetching, getDialog } from "../../redux/selectors/dialog";
import DialogPosts from "./DialogPosts/DialogPosts";
import { ProgressCircular } from "../common/Progress/Progress";
import DialogHeaderUser from "./DialogHeaderUser/DialogHeaderUser";
import DialogForm from "./DialogForm/DialogForm";
import style from "./Dialog.module.scss";
import {newDialogListener} from "../../redux/actions/listeners";

class DialogContainer extends Component {
  state = {
    dialogForm: "",
  };

  _instanceDialog() {
    
    this.props.getUserRequest(this.props.match.params.url);
    this.props.getDialogRequest(
      this.props.match.params.url,
      this.props.fromUid
    );
    this.props.newDialogListener(
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
      this.props.addNewRequest(
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
          dialogHeaderUserSection={
            <DialogHeaderUser userCompanion={userCompanion} />
          }
          dialogFormSection={
            <DialogForm
              onSubmit={this.onSubmit}
              handleChange={this.handleChange}
              dialogValue={this.state.dialogForm}
              getEmoji={this.getEmoji}
            />
          }
          dialogPostsSection={
            getDialogIsFetching === true ? (
              <div className={style.content}>
                <ProgressCircular className={style.progressCenter} />
              </div>
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

export default connect(mapStateToProps, {
  getUserRequest,
  addNewRequest,
  getDialogRequest,
  newDialogListener
})(DialogContainer);
