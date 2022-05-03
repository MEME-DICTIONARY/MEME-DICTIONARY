import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/style/SignupPage.module.css";
import "../assets/style/reset.css";

import AccountSection from "../component/AccountSection.js";
import BaseModal from "../component/BaseModal";
import BaseButton from "../component/BaseButton";

function SignupPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
    setIsCheck(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupButton = () => {
    if (id === "" || password === "") {
      setShowModal(true);
      setModalContents("빈칸을 모두 채워주세요.");
    } else {
      if (!isCheck) {
        setShowModal(true);
        setModalContents("아이디 중복체크를 먼저 해주세요.");
      } else {
        if (id.length < 5 || password.length < 5 || verifyPassword.length < 5) {
          setShowModal(true);
          setModalContents("아이디와 비밀번호는 5글자 이상이어야 합니다.");
        } else if (password !== verifyPassword) {
          setShowModal(true);
          setModalContents("확인 비밀번호가 일치하지 않습니다.");
        } else {
          navigate("/main");
        }
      }
    }
  };
  return (
    <div className={styles.signupPage__wrapper}>
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
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={handlePassword}
            />
          </div>
        </div>

        <div className={styles.data__input}>
          <strong>
            <span>*</span>비밀번호 확인
          </strong>
          <div className={styles.data__password}>
            <input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <BaseButton text="확인" onClick={handleSignupButton}></BaseButton>
    </div>
  );
}

export default SignupPage;
