import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Form, RenderInput } from "../../components/common/Form/Form";
import { Field } from "redux-form";
import { email, required } from "../../utils/validators";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { SIGN_UP } from "../../constants/routes";
import classes from "classnames";
import { ProgressCircular } from "../../components/common/Progress/Progress";
import style from "./SignInPae.module.scss";
import Pages from "../layout/Pages/Pages";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

const SignInPage = ({ isFetching, onSubmit, handleSubmit, error }) => {
  const [passToggle, setPassToggle] = useState(false);

  const showPass = () => setPassToggle(!passToggle);
  return (
    <Pages
      pageMeta={{
        title: "Войти в аккаунт",
        description: "Страница для входа в чат"
      }}
    >
      <div className="formHeader">
        <div className="formHeader__title">Войти в аккаунт</div>
        <div className="formHeader__desc">
          Пожалуйста, войдите в свой аккаунт
        </div>
      </div>
      <div className="formWrap">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className={classes({ formFetching: isFetching })}
        >
          {isFetching && <ProgressCircular className="formSpinner" />}
          <Box mt={2}>
            <Field
              name="email"
              component={RenderInput}
              placeholder="E-Mail"
              validate={[required, email]}
            />
          </Box>
          <Box mt={2} position="relative">
            <Field
              name="password"
              type={passToggle ? "text" : "password"}
              component={RenderInput}
              placeholder="Пароль"
              validate={[required]}
            />
            <div className={style.showPass} onClick={showPass}>
              {passToggle ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </Box>
          {error && (
            <Box mt={1}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          <Box mt={2}>
            <button className="btn btn_blue">ВОЙТИ В АККАУНТ</button>
          </Box>
        </Form>
        <Box mt={2}>
          <Typography align="center" component="p">
            <NavLink to={SIGN_UP} className="formToCome">
              Зарегистрироваться
            </NavLink>
          </Typography>
        </Box>
      </div>
    </Pages>
  );
};
export default SignInPage;
