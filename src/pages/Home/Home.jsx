import React from "react";
import style from './Home.module.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import Messages from "../../components/Messages/Messages";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const Home = () => {
    return (
        <Container>
                <Grid container spacing={3} className={style.chat}>
                    <Grid item md={4}>
                        <aside className={style.aside}>
                            <Sidebar/>
                        </aside>
                    </Grid>
                    <Grid item md={8}>
                        <div className={style.messages}>
                            <Messages/>
                        </div>
                    </Grid>
                </Grid>
        </Container>
    )
};
export default Home;