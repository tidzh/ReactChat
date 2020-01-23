import React from "react";
import style from "./HomePage.module.scss";
import Dialog from "../../components/Dialog/Dialog";
import Container from "@material-ui/core/Container";
import SidebarContainer from "../../components/Sidebar/SidebarContainer";
import Box from "@material-ui/core/Box";

const HomePage = () => {
  return (
    <Container>
      <Box display="flex" className={style.chat}>
        <aside className={style.aside}>
          <SidebarContainer />
        </aside>
          <div className={style.messages}>
            <Dialog />
          </div>
      </Box>
    </Container>
  );
};
export default HomePage;
