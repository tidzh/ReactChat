import React, {useContext} from "react";
import style from "./DialogPosts.module.scss";
import { ImageAvatars } from "../../common/Avatars/Avatars";
import classNames from "classnames";
import {convertDate} from "../../../utils/functions-helpers";
import {AppContext} from "../../Session/withAuthenticationContext";


const DialogPosts = ({ dialog }) => {
  const authed = useContext(AppContext);
  const posts = dialog.map(post => {
    return (
      <div key={post.id} className={style.item}>
        <div className={classNames(style.wrap, {
          [`${style.wrapAnswer}`]: post.fromUid !== authed.profileData.id && true
        })}>
          <div className={style.avatar}><ImageAvatars/></div>
          <div className={style.info}>
            <div className={style.text}>{post.message}</div>
            <div className={style.date}>{convertDate(post.createdAt.seconds)}</div>
          </div>
        </div>
      </div>
    )
  });

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
