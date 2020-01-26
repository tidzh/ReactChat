import React from "react";
import style from "./UsersList.module.scss";
import { Box } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { BadgeAvatars, ImageAvatars } from "../../common/Avatars/Avatars";

const UsersListItem = ({ user: { ava, name, status, verif } }) => {
  return (
    <Box display="flex" className={style.item} alignItems="center">
      {status ? <BadgeAvatars src={ava} /> : <ImageAvatars />}
      <div className={style.info}>
        <div className={style.name}>
          <span>{name}</span>
          {verif ? <span className={style.verif}><CheckIcon fontSize="small" /></span> : ""}
        </div>
        <div className={style.text__preview}>Мы все свидетельствуем …</div>
      </div>
    </Box>
  );
};

const UsersList = ({ usersList }) => {
  return usersList.map((user, id) => <UsersListItem key={id} user={user} />);
};
export default UsersList;
