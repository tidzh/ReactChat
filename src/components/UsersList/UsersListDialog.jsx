import React from "react";
import style from "./UsersList.module.scss";
import { Box } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { BadgeAvatars, ImageAvatars } from "../common/Avatars/Avatars";
import { NavLink } from "react-router-dom";
import { convertDate } from "../../utils/functions-helpers";

const UsersListItem = ({
  user: { uid, photoURL, displayName, status, verif, lastSignOutTime }
}) => {
  return (
    <Box className={style.item}>
      <Box
        display="flex"
        alignItems="center"
        className={style.link}
        activeClassName={style.linkActive}
        component={NavLink}
        to={`/dialog/${uid}`}
      >
        {status ? (
          <BadgeAvatars src={photoURL} />
        ) : (
          <ImageAvatars src={photoURL} />
        )}
        <div className={style.info}>
          <div className={style.name}>
            <span>{displayName}</span>
            {verif && (
              <span className={style.verif}>
                <CheckIcon fontSize="small" />
              </span>
            )}
          </div>
          <div className={style.text__preview}>
            {status
              ? "В сети"
              : lastSignOutTime.seconds &&
                `Был(а) в сети ${convertDate(lastSignOutTime.seconds)}`}
          </div>
        </div>
      </Box>
    </Box>
  );
};

const UsersListDialog = ({ usersList }) => {
  const users = usersList.map(user => (
    <UsersListItem key={user.uid} user={user} />
  ));
  return <div className={style.root}>{users}</div>;
};
export default UsersListDialog;
