import React from "react";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Form, RenderInput} from "../../components/common/Form/Form";
import {Field} from "redux-form";
import {email, required} from "../../utils/validators";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import {SIGN_UP} from "../../constants/routes";
import style from "../SignUpPage/SignUpPage.module.scss";

const SignInPage = ({ onSubmit, handleSubmit, error }) => {
  return(
    <div className="pageWrap">
      <Container>
        <Box
          display="flex"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <div className="formParent">
            <div className="formHeader">
              <div className="formHeader__title">Войти в аккаунт</div>
              <div className="formHeader__desc">
                Пожалуйста, войдите в свой аккаунт
              </div>
            </div>
            <div className="formWrap">
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                    name="password"
                    type="password"
                    component={RenderInput}
                    placeholder="Пароль"
                    validate={[required]}
                  />
                </Box>
                {error && (
                  <Box mt={1}>
                    <Typography color="error">{error}</Typography>
                  </Box>
                )}
                <Box mt={2}>
                  <button className="btn btn_blue">ВОЙТИ В АККАУНТ</button>
                  <Box mt={2}>
                    <Typography align="center" component="p">
                      <NavLink to={SIGN_UP} className={style.toCome}>
                        Зарегистрироваться
                      </NavLink>
                    </Typography>
                  </Box>
                </Box>
              </Form>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  )
};
export default SignInPage;