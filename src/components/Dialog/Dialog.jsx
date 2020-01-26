import React from "react";
import style from "./Dialog.module.scss";
import ChatIcon from "@material-ui/icons/Chat";
import Box from "@material-ui/core/Box";
export const Dialog = ({ user: { name, status}}) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.userName}>{name}</div>
        <div className={style.status}>
          <span className={style.badge}></span>
            {status ? 'онлайн' : 'офлайн'}
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
