import React, { useContext, useEffect, useRef } from "react";
import style from "./DialogHistory.module.scss";
import { ImageAvatars } from "../../common/Avatars/Avatars";
import classNames from "classnames";
import { convertDate } from "../../../utils/functions-helpers";
import { AppContext } from "../../Session/withAuthenticationContext";
import {useWindowSize} from "../../common/WindowSize/WindowSize";

const DialogHistory = ({ dialog, userCompanion: { photoURL } }) => {
  const messagesEndRef = useRef(null);
  const size = useWindowSize();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({block: "center", behavior: "smooth"});
  };
  useEffect(scrollToBottom, [dialog]);
  
  
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
        <div className={style.root} style={{"height":size.height-139}}>{posts}</div>
      ) : (
        <div className={style.default}>
          Здесь будет выводиться история переписки.
        </div>
      )}
      <div ref={messagesEndRef}/>
    </>
  );
};
export default DialogHistory;
