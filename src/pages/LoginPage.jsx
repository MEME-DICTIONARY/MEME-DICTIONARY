import { React, useState } from "react";
import styles from "../assets/style/LoginPage.module.css";
import "../assets/style/reset.css";

import AccountSection from "../component/AccountSection.js";
import BaseButton from "../component/BaseButton";
import BaseModal from "../component/BaseModal";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
    setIsCheck(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginButton = () => {
    if (id === "" || password === "") {
      setShowModal(true);
      setModalContents("빈칸을 모두 채워주세요.");
    } else {
      if (!isCheck) {
        setShowModal(true);
        setModalContents("아이디 중복체크를 먼저 해주세요.");
      }
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
            <button
              onClick={() => {
                setIsCheck(true);
                setShowModal(true);
                setModalContents("중복체크 완료");
              }}
            >
              중복확인
            </button>
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

export default LoginPage;
