import React from "react";
import style from "./Aside.module.scss";
import {useWindowSize} from "../common/WindowSize/WindowSize";

const Aside = ({ search, main, toolbar }) => {
  const size = useWindowSize();
  return (
    <aside className={style.root}>
      <div className={style.wrap}>
        {search}
        <div style={{ maxHeight: size.height - 139 }} className={style.content}>{main}</div>
        {toolbar}
      </div>
    </aside>
  );
};
export default Aside;
