import React from "react";
import style from "./UsersList.module.scss";
import { Box } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { BadgeAvatars, ImageAvatars } from "../../common/Avatars/Avatars";
import { NavLink } from "react-router-dom";

const UsersListItem = ({ user: { id, ava, name, status, verif }, onClick }) => {
  return (
    <Box className={style.item}>
      <Box
        display="flex"
        alignItems="center"
        className={style.link}
        component={NavLink}
        to={`/${id}`}
      >
        {status ? <BadgeAvatars src={ava} /> : <ImageAvatars />}
        <div className={style.info}>
          <div className={style.name}>
            <span>{name}</span>
            {verif ? (
              <span className={style.verif}>
                <CheckIcon fontSize="small" />
              </span>
            ) : (
              ""
            )}
          </div>
          <div className={style.text__preview}>Мы все свидетельствуем …</div>
        </div>
      </Box>
    </Box>
  );
};

const UsersList = ({ usersList}) => {
  return usersList.map(user => (
    <UsersListItem key={user.id} user={user} />
  ));
};
export default UsersList;
