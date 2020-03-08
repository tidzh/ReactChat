import React from "react";
import Chat from "../layout/Chat/Chat";
import { DialogDefault } from "../../components/Dialog/Dialog";

const HomePage = () => {
  return (
    <Chat
      pageMeta={{
        title: "Главная страница чата",
        description: "Главная стратица чата"
      }}
    >
      <DialogDefault />
    </Chat>
  );
};
export default HomePage;
