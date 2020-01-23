import React from "react";
import style from './UsersList.module.scss'
import {Box} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";



const UsersListItem = ({user: {ava, name}}) => {
  return (
    <Box display="flex" className={style.item} alignItems="center">
      <Avatar src={ava}/>
      <div className={style.info}>
        <div className={style.name}>{name}</div>
        <div className={style.text__preview}>Мы все свидетельствуем …</div>
      </div>
    </Box>
  )
};

const UsersList = ({usersList}) => {
  return (
    usersList.map( user => <UsersListItem key={user.id} user={user}/>)
  )
};
export default UsersList;