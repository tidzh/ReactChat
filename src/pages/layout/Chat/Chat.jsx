import React, { useState } from "react";
import style from "../../HomePage/HomePage.module.scss";
import Container from "@material-ui/core/Container";
import Aside from "../../../components/Aside/Aside";
import Search from "../../../components/Search/Search";
import UsersListContainer from "../../../components/Users/UsersList/UsersListContainer";
import SettingsContainer from "../../../components/Settings/SettingsContainer";
import Profile from "../../../components/Profile/Profile";

const Chat = ({ children }) => {
  const [toggleSettings, setToggleSettings] = useState(false);
  const handlerToggleSettings = () => {
    setToggleSettings(!toggleSettings);
  };

  return (
    <div className={style.root}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.chat}>
            <Aside
              search={<Search />}
              main={!toggleSettings ? <UsersListContainer /> : <Profile />}
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
  );
};
export default Chat;
