import React from "react";
import style from "./Aside.module.scss";

const Aside = ({ search, main, settings }) => {
  return (
    <aside className={style.root}>
      <div className={style.wrap}>
        {search}
        <div className={style.content}>{main}</div>
        {settings}
      </div>
    </aside>
  );
};
export default Aside;
