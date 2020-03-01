import React, { useContext, useEffect, useRef } from "react";
import style from "./DialogHistory.module.scss";
import { ImageAvatars } from "../../common/Avatars/Avatars";
import classNames from "classnames";
import { convertDate } from "../../../utils/functions-helpers";
import { AppContext } from "../../Session/withAuthenticationContext";
import { useWindowSize } from "../../common/WindowSize/WindowSize";

const DialogHistory = ({ dialog, userCompanion: { photoURL } }) => {
  const size = useWindowSize();
  const scrollToBottom = useRef(null);

  useEffect(() => {
    scrollToBottom.current.scrollTop = scrollToBottom.current.scrollHeight;
  });

  const authed = useContext(AppContext);
  const posts = dialog.map(post => {
    return (
      <div key={post.id} className={style.item}>
        <div
          className={classNames(style.wrap, {
            [`${style.wrapAnswer}`]:
              post.fromUid !== authed.profileData.id && true
          })}
        >
          <div className={style.avatar}>
            {post.fromUid === authed.profileData.id ? (
              <ImageAvatars src={authed.profileData.photoURL} />
            ) : (
              <ImageAvatars src={photoURL} />
            )}
          </div>
          <div className={style.info}>
            <div className={style.text}>{post.message}</div>
            <div className={style.date}>
              {convertDate(post.createdAt.seconds)}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {posts.length > 0 ? (
        <div
          ref={scrollToBottom}
          className={style.root}
          style={{ maxHeight: size.height - 139 }}
        >
          {posts}
        </div>
      ) : (
        <div className={style.default}>
          Здесь будет выводиться история переписки.
        </div>
      )}
    </>
  );
};
export default DialogHistory;
