import React from "react";
import style from "./DialogHeaderUser.module.scss";
import CheckIcon from "@material-ui/icons/Check";
import classnames from "classnames";
const DialogHeaderUser = ({
  userCompanion: { displayName, status, emailVerified }
}) => {
  return (
    <div className={style.root}>
      <div className={style.userName}>
        <span>{displayName}</span>
        {emailVerified && (
          <span className={style.verif}>
            <CheckIcon fontSize="small" />
          </span>
        )}
      </div>
      <div className={style.status}>
        <span
          className={classnames(style.badge, status && style.badgeOnline)}
        />
        {status ? "онлайн" : "офлайн"}
      </div>
    </div>
  );
};
export default DialogHeaderUser;
