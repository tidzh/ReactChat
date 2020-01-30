import React from "react";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import style from './ConfirmPage.module.scss'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const ConfirmPage = () => {
  return (
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
              <div className="formHeader__title">Регистрация</div>
              <div className="formHeader__desc">
                Для входа в чат, вам нужно зарегистрироваться
              </div>
            </div>
            <div className="formWrap">
              <div className={style.confirm}>
                <InfoOutlinedIcon className={style.icon}/>
                <div className={style.confirmTitle}>Подтвердите свой аккаунт</div>
                <div className={style.text}>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};
export default ConfirmPage;
