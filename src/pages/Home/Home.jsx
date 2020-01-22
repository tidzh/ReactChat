import React from "react";
import style from "./Home.module.scss";
import Messages from "../../components/Messages/Messages";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SidebarContainer from "../../components/Sidebar/SidebarContainer";

const Home = () => {
  return (
    <Container>
      привет
      <Grid container spacing={3} className={style.chat}>
        <Grid item md={4}>
          <aside className={style.aside}>
            <SidebarContainer />
          </aside>
        </Grid>
        <Grid item md={8}>
          <div className={style.messages}>
            <Messages />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
