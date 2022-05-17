import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/style/LoginPage.module.css";

import { connect } from "react-redux";
import { setLogin } from "../redux/action";

import AccountSection from "../component/AccountSection.js";
import BaseButton from "../component/base/BaseButton";
import BaseModal from "../component/base/BaseModal";

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLogin: () => dispatch(setLogin()),
  };
};

function LoginPage({setUserLogin}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginButton = () => {
    if (id === "" || password === "") {
      setShowModal(true);
      setModalContents("빈칸을 모두 채워주세요.");
    } else if (id.length < 5 || password.length < 5) {
      setShowModal(true);
      setModalContents("아이디와 비밀번호는 5글자 이상이어야 합니다.");
    } else {
      setUserLogin();
      navigate("/main");
    }
  };

  return (
    <div className={styles.loginPage__wrapper}>
      <BaseModal
        hidden={!showModal}
        content={modalContents}
        hideModal={() => {
          setShowModal(false);
        }}
      />
      <AccountSection />
      <div className={styles.account__wrapper}>
        <div className={styles.data__input}>
          <strong>
            <span>*</span>아이디
          </strong>
          <div className={styles.data__id}>
            <input
              type="text"
              minLength={5}
              maxLength={10}
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={handleId}
            />
          </div>
        </div>

        <div className={styles.data__input}>
          <strong>
            <span>*</span>비밀번호
          </strong>
          <div className={styles.data__password}>
            <input
              type="password"
              minLength={5}
              maxLength={10}
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={handlePassword}
            />
          </div>
        </div>
      </div>
      <a className={styles.signup__link} href="/signup">
        회원가입 하러가기
      </a>
      <BaseButton text="로그인" onClick={handleLoginButton}></BaseButton>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(LoginPage);
