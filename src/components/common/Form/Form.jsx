import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import style from "./Form.module.scss";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

export const Form = ({ onSubmit, children, className }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <FormControl fullWidth>{children}</FormControl>
    </form>
  );
};

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1),
    fontSize: "14px"
  }
}));

export const RenderInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={style.row}>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={style.input}
        {...props}
      />
      {touched && error && (
        <>
          <ErrorOutlineIcon
            fontSize="small"
            className={style.alertIcon}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            {error}
          </Popover>
        </>
      )}
    </div>
  );
};
export const Input = ({placeholder, className}) => {
  return <input type="text" placeholder={placeholder} className={className}/>
};
