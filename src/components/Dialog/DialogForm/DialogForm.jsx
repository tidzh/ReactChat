import React from "react";
import style from "./DialogForm.module.scss";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import MicNoneIcon from "@material-ui/icons/MicNone";
const DialogForm = () => {
  return (
    <div className={style.root}>
      <SentimentSatisfiedRoundedIcon />
      <form action="" className={style.form}>
        <textarea
          name=""
          id=""
          placeholder="Введите текст сообщения…"
          className={style.textarea}
        />
        <div className={style.icon}>
          <div className={style.iconItem}>
            <MicNoneIcon />
          </div>
          <div className={style.iconItem}>
            <PhotoCameraOutlinedIcon />
          </div>
          <div className={style.iconItem}>
            <button type="submit" className={style.submit}>
              <SendRoundedIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default DialogForm;
