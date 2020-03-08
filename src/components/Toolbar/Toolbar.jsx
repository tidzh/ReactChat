import React from "react";
import style from "./Toolbar.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import classes from "classnames";

const Toolbar = ({ signOut, toolbarActiveTrigger, toggleToolbarActive }) => {
  return (
    <div className={style.root}>
      <div className={style.item}>
        <FaceIcon
          onClick={() => toolbarActiveTrigger("userList")}
          className={classes({
            [`${style.active}`]: toggleToolbarActive === "userList"
          })}
        />
      </div>
      <div className={style.item}>
        <QuestionAnswerOutlinedIcon
          onClick={() => toolbarActiveTrigger("userDialog")}
          className={classes({
            [`${style.active}`]: toggleToolbarActive === "userDialog"
          })}
        />
      </div>
      <div className={style.item}>
        <SettingsIcon
          onClick={() => toolbarActiveTrigger("userSettings")}
          className={classes({
            [`${style.active}`]: toggleToolbarActive === "userSettings"
          })}
        />
      </div>
      <div className={style.item}>
        <ExitToAppIcon onClick={signOut} />
      </div>
    </div>
  );
};
export default Toolbar;
