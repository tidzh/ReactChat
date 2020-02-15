import React from "react";
import style from "./UsersList.module.scss";
import { Box } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { BadgeAvatars, ImageAvatars } from "../../common/Avatars/Avatars";
import { NavLink } from "react-router-dom";

const UsersListItem = ({ user: { id, photoURL, displayName, status, verif } }) => {
  return (
    <Box className={style.item}>
      <Box
        display="flex"
        alignItems="center"
        className={style.link}
        activeClassName={style.linkActive}
        component={NavLink}
        to={`/dialog/${id}`}
      >
        {status ? <BadgeAvatars src={photoURL} /> : <ImageAvatars src={photoURL} />}
        <div className={style.info}>
          <div className={style.name}>
            <span>{displayName}</span>
            {verif && (
              <span className={style.verif}>
                <CheckIcon fontSize="small" />
              </span>
            )}
          </div>
          <div className={style.text__preview}>Мы все свидетельствуем …</div>
        </div>
      </Box>
    </Box>
  );
};

const UsersList = ({ usersList }) => {
  const users = usersList.map(user => (
    <UsersListItem key={user.id} user={user} />
  ));
  return (
    <div className={style.root}>{users}</div>
  );
};
export default UsersList;
