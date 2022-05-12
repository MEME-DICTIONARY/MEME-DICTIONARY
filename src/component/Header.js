import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../assets/style/header.module.css";
import { setLogout } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLogout: () => dispatch(setLogout()),
  };
};

function Header({ isLogin, setUserLogout }) {
  let [categoryClose, categoryOpen] = useState(styles.categoryModalHidden);
  let [logoutModalClose, logoutModal] = useState(styles.logModalHidden);
  let [loginModalClose, loginModal] = useState(styles.logModalHidden);

  function moveToSearchPage() {
    window.location.href = "/search";
  }

  function handleLoginModal() {
    console.log(isLogin);
    if (!isLogin) {
      logoutModal(styles.logoutModal);
    } else if (isLogin) {
      loginModal(styles.loginModal);
    }
  }

  return (
    <div>
      <div className={styles.headcontainer}>
        <button
          className={styles.header_HamburgerBtn}
          onClick={() => {
            categoryOpen(styles.categoryModal);
          }}
        >
          <img
            className={styles.header_HamburgerImg}
            src={require("../assets/img/detailPage/hamburger.PNG")}
            alt="햄버거 아이콘"
          />
        </button>
        <a className={styles.header_CircleParent} href="/main">
          <div className={styles.header_Circle1}></div>
          <div className={styles.header_Circle2}></div>
          <div className={styles.header_Circle3}></div>
        </a>
        <article className={styles.header_SearchParent}>
          <input
            className={styles.header_SearchBox}
            type="text"
            style={{ color: "white" }}
          />
          <button
            className={styles.header_SearchBtn}
            onClick={moveToSearchPage}
          >
            <img
              className={styles.header_SearchImg}
              src={require("../assets/img/detailPage/search.PNG")}
              alt="검색아이콘"
            />
          </button>
        </article>
        <button className={styles.header_PersonBtn} onClick={handleLoginModal}>
          <img
            className={styles.header_PersonImg}
            src={require("../assets/img/detailPage/person.PNG")}
            alt="사람아이콘"
          />
        </button>
        <div className={styles.header_Line}></div>
      </div>

      <div className={categoryClose}>
        <div
          className={styles.categoryModal_overlay}
          onClick={() => {
            categoryOpen(styles.categoryModalHidden);
          }}
        ></div>
        <div className={styles.categoryModal_content}>
          <h2 className={styles.category_title}>용어</h2>
          <hr />
          <div className={styles.categoryButton_container}>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㄱ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㄴ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㄷ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㄹ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅁ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅂ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅅ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅇ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅈ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅊ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅋ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅌ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅍ
            </button>
            <button
              className={styles.categoryButton_word}
              onClick={moveToSearchPage}
            >
              ㅎ
            </button>
          </div>
          <br />
          <h2 className={styles.category_title}>짤</h2>
          <hr />
          <div className={styles.categoryButton_container}>
            <button
              className={styles.categoryButton_img}
              onClick={moveToSearchPage}
            >
              TV
            </button>
            <button
              className={styles.categoryButton_img}
              onClick={moveToSearchPage}
            >
              영화
            </button>
            <button
              className={styles.categoryButton_img}
              onClick={moveToSearchPage}
            >
              커뮤니티
            </button>
            <button
              className={styles.categoryButton_img}
              onClick={moveToSearchPage}
            >
              기타
            </button>
          </div>
        </div>
      </div>

      <div className={logoutModalClose}>
        <div
          className={styles.logModal_overlay}
          onClick={() => {
            logoutModal(styles.logModalHidden);
          }}
        ></div>
        <ul className={styles.logoutModal_content}>
          <div className={styles.triangleOut}></div>
          <li className={styles.logModalList}>
            <a className={styles.logModalSelect} href="/login">
              {" "}
              로그인
            </a>
          </li>
          <li className={styles.logModalList}>
            <a className={styles.logModalSelect} href="/signup">
              {" "}
              회원가입
            </a>
          </li>
        </ul>
      </div>
      <div className={loginModalClose}>
        <div
          className={styles.logModal_overlay}
          onClick={() => {
            loginModal(styles.logModalHidden);
          }}
        ></div>
        <ul className={styles.loginModal_content}>
          <div className={styles.triangleIn}></div>
          <li className={styles.logModalList}>
            <a className={styles.logModalSelect} href="/mypage/upload">
              {" "}
              마이페이지
            </a>
          </li>
          <li className={styles.logModalList}>
            <a className={styles.logModalSelect} href="/upload">
              {" "}
              밈 등록하기
            </a>
          </li>
          <li className={styles.logModalList} onClick={() => setUserLogout()}>
            로그아웃
          </li>
          {/* <li className={styles.logModalList}><a className={styles.logModalSelect} href="/upload" > 로그아웃</a></li> */}
        </ul>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);