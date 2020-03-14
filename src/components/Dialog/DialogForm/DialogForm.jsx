import React, { useState } from "react";
import style from "./DialogForm.module.scss";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { Form } from "../../common/Form/Form";
import classes from "classnames";
import Emoji from "../../common/Emoji/Emoji";
const DialogForm = ({
  onSubmit,
  handleChange,
  dialogValue,
  getEmoji,
  emojiHide
}) => {
  const [smileToggle, setSmileToggle] = useState(null);
  const smileTriggerHandler = () => {
    setSmileToggle(!smileToggle);
  };
  const addEmoji = emoji => {
    setSmileToggle(!smileToggle);
    getEmoji(emoji.native);
  };
  if (!emojiHide && smileToggle) {
    setSmileToggle(false);
  }
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        {smileToggle && (
          <div className={style.smile}>
            <Emoji addEmoji={addEmoji} />
          </div>
        )}
        <SentimentSatisfiedRoundedIcon
          className={classes(style.smileTrigger, {
            [`${style.smileTriggerActive}`]: smileToggle
          })}
          onClick={smileTriggerHandler}
        />
        <Form onSubmit={onSubmit} className={style.form}>
          <input
            onChange={handleChange}
            value={dialogValue}
            name="dialog"
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
              <button className={style.submit}>
                <SendRoundedIcon />
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default DialogForm;
