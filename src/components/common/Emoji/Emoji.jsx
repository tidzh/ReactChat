import React from "react";
import "./Emoji.css";
import {Picker} from "emoji-mart";

const Emoji = ({ addEmoji }) => {
  return (
    <Picker
      set="messenger"
      darkMode={false}
      title="Выберите смайлик"
      emoji="point_up"
	  html={true}
	  defaultSkin={2}
	  size={48}
      i18n={{
        search: "Поиск"
      }}
      onSelect={addEmoji}
    />
  );
};
export default Emoji;
