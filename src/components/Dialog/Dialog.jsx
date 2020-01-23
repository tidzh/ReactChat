import React from "react";
import style from './Dialog.module.scss'
const Dialog = () => {
  return (
    <div className={style.header}>
      <div className={style.userName}>Ян Борисович Кум</div>
      <div className={style.status}>онлайн</div>
    </div>
  );
};
export default Dialog;
