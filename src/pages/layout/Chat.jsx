import React from "react";
import style from "../HomePage/HomePage.module.scss";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Search from "../../components/Search/Search";
import SidebarContainer from "../../components/Sidebar/SidebarContainer";

const Chat = ({ children }) => {
  return (
    <div className={style.root}>
      <Container>
        <Box display="flex" className={style.chat}>
          <aside className={style.aside}>
            <Search />
            <SidebarContainer />
          </aside>
          <div className={style.messages}>{children}</div>
        </Box>
      </Container>
    </div>
  );
};
export default Chat;
