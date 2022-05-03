
import React, { useState } from 'react';

import styles from '../assets/style/header.module.css';

function Header() {
  let [categoryClose, categoryOpen] = useState(styles.categoryModalHidden);
  let [loginModalClose, loginModalOpen] = useState(styles.loginModalHidden)
  let[search , changeSearch] =useState("");

  function moveToSearchPage(){
    window.location.href="http://localhost:3000/search"
    changeSearch();
  }


  return (
    <div>


      <div className={styles.headcontainer}>
        <button className={styles.header_HamburgerBtn} onClick={() => { categoryOpen(styles.categoryModal) }} >
          <img className={styles.header_HamburgerImg} src={require("../assets/img/detailPage/hamburger.PNG")} alt="햄버거 아이콘" />

        </button>
        <a className={styles.header_CircleParent} href="http://localhost:3000/main" >
          <div className={styles.header_Circle1}></div>
          <div className={styles.header_Circle2}></div>
          <div className={styles.header_Circle3}></div>
        </a>
        <article className={styles.header_SearchParent}>
          <input className={styles.header_SearchBox} type="text" style={{ color: 'white' }} />
          <button className={styles.header_SearchBtn} onClick={moveToSearchPage}>
            <img className={styles.header_SearchImg} src={require("../assets/img/detailPage/search.PNG")} alt="검색아이콘" />
          </button>
        </article>
        <button className={styles.header_PersonBtn} onClick={() => {loginModalOpen(styles.loginModal)}}>
          <img className={styles.header_PersonImg} src={require("../assets/img/detailPage/person.PNG")} alt="사람아이콘" />
        </button>
        <div className={styles.header_Line}></div>
      </div>

      <div className={categoryClose}>
        <div className={styles.categoryModal_overlay} onClick={() => { categoryOpen(styles.categoryModalHidden) }} ></div>
        <div className={styles.categoryModal_content}>
          <h2 className={styles.category_title}>용어</h2>
          <hr />
          <div className={styles.categoryButton_container}>
            <button className={styles.categoryButton_word}>ㄱ</button>
            <button className={styles.categoryButton_word}>ㄴ</button>
            <button className={styles.categoryButton_word}>ㄷ</button>
            <button className={styles.categoryButton_word}>ㄹ</button>
            <button className={styles.categoryButton_word}>ㅁ</button>
            <button className={styles.categoryButton_word}>ㅂ</button>
            <button className={styles.categoryButton_word}>ㅅ</button>
            <button className={styles.categoryButton_word}>ㅇ</button>
            <button className={styles.categoryButton_word}>ㅈ</button>
            <button className={styles.categoryButton_word}>ㅊ</button>
            <button className={styles.categoryButton_word}>ㅋ</button>
            <button className={styles.categoryButton_word}>ㅌ</button>
            <button className={styles.categoryButton_word}>ㅍ</button>
            <button className={styles.categoryButton_word}>ㅎ</button>
          </div>
          <br />
          <h2 className={styles.category_title}>짤</h2>
          <hr />
          <div className={styles.categoryButton_container}>
            <button className={styles.categoryButton_img}>TV</button>
            <button className={styles.categoryButton_img}>영화</button>
            <button className={styles.categoryButton_img}>커뮤니티</button>
            <button className={styles.categoryButton_img}>기타</button>
          </div>
        </div>
      </div>

      <div className={loginModalClose}>
        <div className={styles.loginModal_overlay} onClick={() => { loginModalOpen(styles.loginModalHidden) }} ></div>
        <ul className={styles.loginModal_content}>
            <div className={styles.triangle}></div>
            <li className={styles.loginModalList}><a className={styles.loginModalSelect} href="http://localhost:3000/login"> 로그인</a></li>
            <li className={styles.loginModalList}><a className={styles.loginModalSelect} href="http://localhost:3000/signup" > 회원가입</a></li>
         
      
        </ul>
      </div>

    </div>
  )
}
export default Header;