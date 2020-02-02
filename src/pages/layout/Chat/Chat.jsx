import React from "react";
import style from "../../HomePage/HomePage.module.scss";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Search from "../../../components/Search/Search";
import UsersListContainer from "../../../components/Users/UsersList/UsersListContainer";
import SettingsContainer from "../../../components/Settings/SettingsContainer";

const Chat = ({ children }) => {
  
  return (
    <div className={style.root}>
      <Container>
        <Box display="flex" className={style.chat}>
          <aside className={style.aside}>
            <Search />
            <UsersListContainer />
            <SettingsContainer />
          </aside>
          <div className={style.messages}>{children}</div>
        </Box>
      </Container>
    </div>
  );
};
export default Chat;
