import React from "react";
import style from "./Settings.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import classes from "classnames";

const Settings = ({ signOut, settingTrigger, userListTrigger, toggleSettings }) => {
  return (
    <div className={style.root}>
      <div className={style.item}>
        <FaceIcon
          onClick={userListTrigger}
          className={classes({ [`${style.active}`]: toggleSettings })}
        />
      </div>
      <div className={style.item}>
        <QuestionAnswerOutlinedIcon
          onClick={userListTrigger}
          className={classes({ [`${style.active}`]: toggleSettings })}
        />
      </div>
      <div className={style.item}>
        <SettingsIcon
          onClick={settingTrigger}
          className={classes({ [`${style.active}`]: toggleSettings })}
        />
      </div>
      <div className={style.item}>
        <ExitToAppIcon onClick={signOut} />
      </div>
    </div>
  );
};
export default Settings;
