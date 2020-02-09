import React from "react";
import style from "./DialogPosts.module.scss";
import { ImageAvatars } from "../../common/Avatars/Avatars";
import classNames from "classnames";

const DialogPosts = ({ dialog }) => {
  const posts = dialog.map(post => (
    <div key={post.id} className={style.item}>
      <div className={classNames(style.wrap, {
        [`${style.wrapAnswer}`]: post.type === 1 && true
      })}>
        <div className={style.avatar}><ImageAvatars/></div>
        <div className={style.info}>
          <div className={style.text}>{post.posts}</div>
          <div className={style.date}>{post.date}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {posts ? (
        <div className={style.root}>{posts}</div>
      ) : (
        <div className={style.default}>
          Здесь будет выводиться история переписки.
        </div>
      )}
    </>
  );
};
export default DialogPosts;
