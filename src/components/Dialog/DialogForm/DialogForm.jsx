import React from "react";
import style from "./DialogForm.module.scss";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { Form, RenderInput } from "../../common/Form/Form";
import { required } from "../../../utils/validators";
import { Field } from "redux-form";
const DialogForm = ({ onSubmit, handleSubmit}) => {
  return (
    <div className={style.root}>
      <SentimentSatisfiedRoundedIcon />
      <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Field
          name="dialog"
          component={RenderInput}
          placeholder="Введите текст сообщения…"
          className={style.textarea}
          validate={[required]}
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
  );
};
export default DialogForm;
