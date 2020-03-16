import React, { useContext, useEffect, useState } from "react";
import style from "../../HomePage/HomePage.module.scss";
import Container from "@material-ui/core/Container";
import Aside from "../../../components/Aside/Aside";
import Search from "../../../components/Search/Search";
import UsersListContainer from "../../../components/UsersList/UsersListContainer";
import Profile from "../../../components/Profile/Profile";
import ToolbarContainer from "../../../components/Toolbar/ToolbarContainer";
import { Helmet } from "react-helmet";
import { AppContext } from "../../../components/Session/withAuthenticationContext";

const Chat = ({
  children,
  pageMeta: { title = "", description = "" } = ""
}) => {
  const context = useContext(AppContext);
  const [toggleToolbarActive, setToggleToolbarActive] = useState(null);
  const handlerToggleSettings = activeElement => {
    setToggleToolbarActive(activeElement);
  };

  useEffect(() => {
    if (context.usersDialogsCount === 0) {
      setToggleToolbarActive("userList");
    } else {
      setToggleToolbarActive("userDialog");
    }
  }, [context.usersDialogsCount]);

  if (Object.keys(context.profileData).length === 0) {
    return false;
  }

  const toolbarActive = toggleToolbarActive => {
    if (toggleToolbarActive === "userSettings") {
      return <Profile />;
    } else {
      return (
        <UsersListContainer
          fromUid={context.profileData.id}
          userListType={toggleToolbarActive}
        />
      );
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
