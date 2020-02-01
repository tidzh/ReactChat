import React from "react";
import { Field } from "redux-form";
import { confirmPassword, email, required } from "../../utils/validators";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Form, RenderInput } from "../../components/common/Form/Form";
import { NavLink } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";
import classes from "classnames";
import { ProgressCircular } from "../../components/common/Progress/Progress";
import Pages from "../layout/Pages";

const SignUpPage = ({ isFetching, onSubmit, handleSubmit, error }) => {
  return (
    <Pages
      pageMeta={{
        title: "Регистрация в чате",
        description: "Страница регистрации в чате"
      }}
    >
      <div className="formHeader">
        <div className="formHeader__title">Регистрация</div>
        <div className="formHeader__desc">
          Для входа в чат, вам нужно зарегистрироваться
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
          <Box mt={2}>
            <Field
              name="name"
              component={RenderInput}
              placeholder="Ваше имя"
              validate={[required]}
            />
          </Box>
          <Box mt={2}>
            <Field
              name="password"
              type="password"
              component={RenderInput}
              placeholder="Пароль"
              validate={[required, confirmPassword]}
            />
          </Box>
          <Box mt={2}>
            <Field
              name="confirm_password"
              type="password"
              component={RenderInput}
              placeholder="Повторить пароль"
              validate={[required, confirmPassword]}
            />
          </Box>
          {error && (
            <Box mt={1}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          <Box mt={2}>
            <button className="btn btn_blue">ЗАРЕГИСТРИРОВАТЬСЯ</button>
          </Box>
        </Form>
        <Box mt={2}>
          <Typography align="center" component="p">
            <NavLink to={SIGN_IN} className="formToCome">
              Войти в аккаунт
            </NavLink>
          </Typography>
        </Box>
      </div>
    </Pages>
  );
};
export default SignUpPage;
