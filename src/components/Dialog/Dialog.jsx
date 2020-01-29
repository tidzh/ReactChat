import React from "react";
import style from "./Dialog.module.scss";
import ChatIcon from "@material-ui/icons/Chat";
import Box from "@material-ui/core/Box";
import classnames from "classnames";
import CheckIcon from "@material-ui/icons/Check";
import { ProgressCircular } from "../common/Progress/Progress";
export const Dialog = ({ user: { name, status, verif }, isFetching }) => {
  if (isFetching) return <ProgressCircular />;
  return (
    <>
      <div className={style.header}>
        <div className={style.userName}>
          <span>{name}</span>
          {verif && (
            <span className={style.verif}>
              <CheckIcon fontSize="small" />
            </span>
          )}
        </div>
        <div className={style.status}>
          <span
            className={classnames(style.badge, status && style.badgeOnline)}
          ></span>
          {status ? "онлайн" : "офлайн"}
        </div>
      </div>
    </>
  );
};
export const DialogDefault = () => {
  return (
    <div className={style.default}>
      <div className={style.stub}>
        <Box mb={2}>
          <ChatIcon fontSize="inherit" className={style.defaultImg} />
        </Box>
        <p className={style.defaultText}>
          Пожалуйста, выберите беседу или создайте новую
        </p>
      </div>
    </div>
  );
};
