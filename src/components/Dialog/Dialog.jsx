import React from "react";
import style from "./Dialog.module.scss";
import ChatIcon from "@material-ui/icons/Chat";
import Box from "@material-ui/core/Box";

export const Dialog = ({
  dialogPostsSection,
  dialogHistoryUserSection,
  dialogFormSection
}) => {
  return (
    <>
      {dialogHistoryUserSection}
      <div className={style.content}>
        {dialogPostsSection}
        {dialogFormSection}
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
