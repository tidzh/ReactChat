import React, { useState } from "react";
import style from "../../HomePage/HomePage.module.scss";
import Container from "@material-ui/core/Container";
import Aside from "../../../components/Aside/Aside";
import Search from "../../../components/Search/Search";
import UsersListContainer from "../../../components/UsersList/UsersListContainer";
import Profile from "../../../components/Profile/Profile";
import ToolbarContainer from "../../../components/Toolbar/ToolbarContainer";
import { Helmet } from "react-helmet";

const Chat = ({
  children,
  pageMeta: { title = "", description = "" } = ""
}) => {
  const [toggleToolbarActive, setToggleToolbarActive] = useState("userDialog");
  const handlerToggleSettings = activeElement => {
    setToggleToolbarActive(activeElement);
  };

  const toolbarActive = toggleToolbarActive => {
    switch (toggleToolbarActive) {
      case "userSettings":
        return <Profile />;
      default:
        return <UsersListContainer userListType={toggleToolbarActive} />;
    }
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
                main={toolbarActive(toggleToolbarActive)}
                toolbar={
                  <ToolbarContainer
                    toolbarActiveTrigger={handlerToggleSettings}
                    toggleToolbarActive={toggleToolbarActive}
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
