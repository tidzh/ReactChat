import React from "react";
import style from "./Settings.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const Settings = ({ signOut }) => {
  return (
    <div className={style.root}>
      <div className={style.item}>
        <SettingsIcon />
      </div>
      <div className={style.item}>
        <ExitToAppIcon onClick={signOut} />
      </div>
    </div>
  );
};
export default Settings;
