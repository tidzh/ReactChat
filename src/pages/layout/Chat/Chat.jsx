import React, { useState } from "react";
import style from "../../HomePage/HomePage.module.scss";
import Container from "@material-ui/core/Container";
import Aside from "../../../components/Aside/Aside";
import Search from "../../../components/Search/Search";
import UsersListContainer from "../../../components/Users/UsersList/UsersListContainer";
import SettingsContainer from "../../../components/Settings/SettingsContainer";
import Profile from "../../../components/Profile/Profile";
import { Helmet } from "react-helmet";

const Chat = ({
  children,
  pageMeta: { title = "", description = "" } = ""
}) => {
  const [toggleSettings, setToggleSettings] = useState(false);
  const handlerToggleSettings = () => {
    setToggleSettings(!toggleSettings);
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className={style.root}>
        <Container>
          <div className={style.wrapper}>
            <div className={style.chat}>
              <Aside
                search={<Search />}
                main={toggleSettings ? <Profile /> : <UsersListContainer />}
                settings={
                  <SettingsContainer
                    settingTrigger={handlerToggleSettings}
                    toggleSettings={toggleSettings}
                  />
                }
              />
              <div className={style.messages}>{children}</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Chat;
