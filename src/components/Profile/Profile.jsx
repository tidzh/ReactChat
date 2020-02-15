import React, { useContext } from "react";
import style from "./Profile.module.scss";
import { AppContext } from "../Session/withAuthenticationContext";
import { Box } from "@material-ui/core";
import UploaderMediaContainer from "../common/UploaderMedia/UploaderMediaContainer";

const Profile = () => {
  const { email, photoURL, displayName } = useContext(AppContext).profileData;

  return (
    <div className={style.root}>
      <Box display="flex" alignItems="center">
        <UploaderMediaContainer img={photoURL} type="avatar" />
        <Box ml={1}>
          <div className={style.name}>{displayName}</div>
          <div className={style.email}>{email}</div>
        </Box>
      </Box>
    </div>
  );
};
export default Profile;
