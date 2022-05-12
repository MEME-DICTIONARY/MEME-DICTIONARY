import React, { useState } from "react";
import styles from "../assets/style/MyPage.module.css";
import Header from "../component/Header.js";
import BaseModal from "../component/BaseModal";

function MyPagepw() {
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [newPW, setnewPW] = useState("");
  const [verifyNewPW, setVerifyNewPw] = useState("");

  function quitModalOpen() {
    setShowModal(true);
    setModalContents("정말 탈퇴하시겠습니까?");
  }

  function pwChangeModalOpen() {
    if(newPW.length<5){
      setShowModal(true);
      setModalContents("비밀번호는 5글자 이상이어야 합니다.");

    }
    else if (newPW.length>=5 && newPW === verifyNewPW) {
      setShowModal(true);
      setModalContents("정말 변경하시겠습니까?");
    } else if(newPW.length>=5 && newPW !== verifyNewPW) {
      setShowModal(true);
      setModalContents("비밀번호가 일치하지 않습니다");
    }
  }

  const handleNewPassword = (e) => {
    setnewPW(e.target.value);
  };

  return (
    <div>
      <BaseModal
        hidden={!showModal}
        content={modalContents}
        hideModal={() => {
          setShowModal(false);
        }}
        withdrawal={newPW === verifyNewPW && true && newPW.length>5 }
      />
      <div id={styles.MyPage_Grid}>
        <ul className={styles.MyPage_list_Container}>
          <li className={styles.MyPage_list}>
            <a className={styles.MyPage_nonSelectlink} href="/mypage/upload">
              등록한 글
            </a>
          </li>
          <li className={styles.MyPage_list}>
            <a className={styles.MyPage_nonSelectlink} href="/mypage/bookmark">
              나의 활동
            </a>
            <ul className={styles.MyPage_list_child}>
              <li>
                <a
                  className={styles.MyPage_nonSelectlink}
                  href="/mypage/bookmark"
                >
                  북마크
                </a>
              </li>
              <li>
                <a
                  className={styles.MyPage_nonSelectlink}
                  href="/mypage/comment"
                >
                  댓글
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.MyPage_list}>
            <a className={styles.MyPage_link} href="/mypage/pw">
              p/w 수정
            </a>
          </li>
          <div className={styles.listLine}></div>
        </ul>

        <div className={styles.MyPage_pw_Container}>
          <h3 className={styles.MyPage_pw}> 현재 비밀번호</h3>
          <input className={styles.MyPage_pw_input} type="text" />
          <h3 className={styles.MyPage_pw}> 비밀번호 수정</h3>
          <input
            className={styles.MyPage_pw_input}
            type="text"
            value={newPW}
            onChange={handleNewPassword}
          />
          <h3 className={styles.MyPage_pw}>비밀번호 확인</h3>
          <input
            className={styles.MyPage_pw_input}
            type="text"
            value={verifyNewPW}
            onChange={(e) => setVerifyNewPw(e.target.value)}
          />
          <button
            className={styles.MyPage_pw_changeBtn}
            onClick={pwChangeModalOpen}
          >
            {" "}
            변경
          </button>
          <button className={styles.MyPage_delete} onClick={quitModalOpen}>
            회원탈퇴
          </button>
        </div>
      </div>

      <Header></Header>
    </div>
  );
}

export default MyPagepw;
