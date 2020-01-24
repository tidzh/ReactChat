import React from "react";
import style from "./SignUpPage.module.scss";
import {Field} from "redux-form";
import {email, required} from "../../utils/validators";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Form, renderInput} from "../../components/common/Form/Form";

const SignUpPage = ({onSubmit, handleSubmit, error}) => {
  return (
    <div className="pageWrap">
	<Box
	  display="flex"
	  flexGrow={1}
	  justifyContent="center"
	  alignItems="center">
	  <div className="formParent">
        <div className="formHeader">
          <div className="formHeader__title">Регистрация</div>
          <div className="formHeader__desc">Для входа в чат, вам нужно зарегистрироваться</div>
        </div>
		<div className="formWrap">
		  <Form onSubmit={handleSubmit(onSubmit)}>
			<Box mt={2}>
			  <Field
				name="email"
				component={renderInput}
				placeholder="E-Mail"
				validate={[required, email]}
			  />
			</Box>
			<Box mt={2}>
			  <Field
				name="name"
				component={renderInput}
				placeholder="Ваше имя"
				validate={[required]}
			  />
			</Box>
			<Box mt={3}>
			  <Field
				name="confirm_password"
				type="password"
				component={renderInput}
				placeholder="Повторить пароль"
				validate={[required]}
			  />
			</Box>
			<Box mt={3}>
			  <Field
				name="password"
				type="password"
				component={renderInput}
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
			  <Button
				type="submit"
				variant="contained"
				color="primary"
				className={style.btn}
				size="large">
				ЗАРЕГИСТРИРОВАТЬСЯ
			  </Button>
			  <Box mt={2}>
				<Typography align="center" component="p">
				  <a href="" className={style.toСome}>Войти в аккаунт</a>
				</Typography>
			  </Box>
			</Box>
		  </Form>
		</div>
	  </div>
	</Box>
	</div>
  );
};
export default SignUpPage;
