import React from "react";
import style from "./HomePage.module.scss";
import Container from "@material-ui/core/Container";
import SidebarContainer from "../../components/Sidebar/SidebarContainer";
import Box from "@material-ui/core/Box";
import Search from "../../components/Search/Search";
import DialogContainer from "../../components/Dialog/DialogContainer";

const HomePage = () => {
  return (
    <div className={style.root}>
      <Container>
        <Box display="flex" className={style.chat}>
          <aside className={style.aside}>
            <Search/>
            <SidebarContainer />
          </aside>
          <div className={style.messages}>
            <DialogContainer />
          </div>
        </Box>
      </Container>
    </div>
  );
};
export default HomePage;
