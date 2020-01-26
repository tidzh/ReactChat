import React from "react";
import {Input} from "../common/Form/Form";
import SearchIcon from '@material-ui/icons/Search';
import style from './Search.module.scss'
const Search = () => {
  return (
    <div className={style.root}>
    <div className={style.wrap}>
      <SearchIcon fontSize="small" className={style.icon}/>
      <Input placeholder="Поиск среди контактов" className={style.input}/>
    </div>
    </div>
  )
};
export default Search;
