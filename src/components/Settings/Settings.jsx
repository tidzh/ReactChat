import React from "react";
import style from "./Settings.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import classes from "classnames";

const Settings = ({ signOut, settingTrigger, toggleSettings }) => {
  return (
    <div className={style.root}>
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
