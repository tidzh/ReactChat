import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import style from "./UploaderMedia.module.scss";
import { BadgeAvatars } from "../Avatars/Avatars";
import classNames from "classnames";

const UploaderMedia = ({ img, type, handleCapture }) => {
  return (
    <div
      className={classNames(style.img, {
        [`${style.imgBorder}`]: type === "avatar"
      })}
    >
      {type === "avatar" && (
        <BadgeAvatars size="large" src={img} component="div" />
      )}
      <div className={style.upload}>
        <input
          accept="image/*"
          className={style.input}
          id="icon-button-photo"
          onChange={handleCapture}
          type="file"
        />
        <label htmlFor="icon-button-photo" className={style.icon}>
          <IconButton color="inherit" component="div">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  );
};

export default UploaderMedia;
