import React from "react";
import style from "./ConfirmPage.module.scss";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Pages from "../layout/Pages";

const ConfirmPage = ({ email }) => {
  return (
    <Pages
      pageMeta={{
        title: "Подтвердите свой аккаунт",
        description: "Для входа в чат вам нужно подтвержить свой аккаункт"
      }}
    >
      <div className="formHeader">
        <div className="formHeader__title">Регистрация</div>
        <div className="formHeader__desc">
          Для входа в чат, вам нужно зарегистрироваться
        </div>
      </div>
      <div className="formWrap">
        <div className={style.confirm}>
          <InfoOutlinedIcon className={style.icon} />
          <div className={style.confirmTitle}>Подтвердите свой аккаунт</div>
          <div className={style.text}>
            На Вашу почту ({email}) отправлено письмо с ссылкой на подтверждение
            аккаунта.
          </div>
        </div>
      </div>
    </Pages>
  );
};
export default ConfirmPage;
