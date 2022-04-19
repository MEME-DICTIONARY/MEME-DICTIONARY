
import React, {useState} from 'react';

import styles from '../assets/style/header.module.css';

function Header(){
  let[categoryClose, categoryOpen]= useState(styles.categoryModalHidden);
  

   
      
return(
<div>


<div className={styles.headcontainer}>
      <button className={styles.header_HamburgerBtn} onClick={ () =>{categoryOpen(styles.categoryModal)}} >
        <img className={styles.header_HamburgerImg} src={require("../assets/img/detailPage/hamburger.PNG")} alt="햄버거 아이콘" />
        
      </button>
      <article className={styles.header_CircleParent}>
        <div className={styles.header_Circle1}></div>
        <div className={styles.header_Circle2}></div>
        <div className={styles.header_Circle3}></div>
      </article>
      <article className={styles.header_SearchParent}>
        <input className={styles.header_SearchBox} type="text" style={{color:'white'}}  />
        <button className={styles.header_SearchBtn}>
          <img className={styles.header_SearchImg} src={require("../assets/img/detailPage/search.PNG")} alt="검색아이콘" />
        </button>
      </article>
      <button className={styles.header_PersonBtn}>
        <img className={styles.header_PersonImg} src={require("../assets/img/detailPage/person.PNG")} alt="사람아이콘" />
      </button>
      <hr className={styles.header_Line}></hr>
</div>
     
<div className={categoryClose}>
  <div className={styles.categoryModal_overlay}  onClick={ () =>{categoryOpen(styles.categoryModalHidden)}} ></div>
  <div className={styles.categoryModal_content}>
    <h2 className={styles.category_title}>용어</h2>
    <hr  />
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


</div>
)
}
export default Header;