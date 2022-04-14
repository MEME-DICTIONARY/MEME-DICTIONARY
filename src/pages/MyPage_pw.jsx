import React from 'react';
import '../assets/style/MyPage.module.css'
import '../assets/style/header.module.css';
import Header from '../component/Header.js';
function MyPage_pw() {
  
  function openCategoryModal(){
    const modal=document.querySelector(".categoryModal");
    modal.classList.remove("categoryModalHidden");
  }
  function closeCategoryModal(){
    const modal=document.querySelector(".categoryModal");
    modal.classList.add("categoryModalHidden");
  }

  
 
  
  return (
    <div >
        <Header onClick={openCategoryModal}></Header>
      
      <div id="MyPage_Grid">
        <ul className="MyPage_list_Container">
          <li className="MyPage_list">
            <a className="MyPage_nonSelectlink" href="App.js">등록한 글</a>
          </li>
          <li className="MyPage_list"><a className="MyPage_nonSelectlink" href="MyPage_bookmark.html">
          나의 활동
        </a><ul className="MyPage_list_child">
            <li><a className="MyPage_nonSelectlink" href="MyPage_bookmark.html">북마크</a></li>
            <li><a className="MyPage_nonSelectlink" href="MyPage_comment.html">댓글</a></li>
          </ul>
          </li>
          <li className="MyPage_list"><a className="MyPage_link" href="App.js">p/w 수정</a></li>
        </ul>
        <div className="MyPage_pw_Container">
        <h3 className="MyPage_pw"> 현재 비밀번호</h3>
        <input className="MyPage_pw_input" type="text"  />
        <h3 className="MyPage_pw"> 비밀번호 수정</h3>
        <input className="MyPage_pw_input" type="text"  />
        <h3 className="MyPage_pw">비밀번호 확인</h3>
        <input className="MyPage_pw_input" type="text"  />
        <button className="MyPage_pw_changeBtn"> 변경</button>
        <button className="MyPage_delete">회원탈퇴</button>
        

      </div>
      </div>

    
      <div className="categoryModal categoryModalHidden">
      <div className="categoryModal_overlay" onClick={closeCategoryModal}></div>
      <div className="categoryModal_content">
        <h2 className="category_title">용어</h2>
        <hr />
        <div className="categoryButton_container">
          <button className="categoryButton_word">ㄱ</button>
          <button className="categoryButton_word">ㄴ</button>
          <button className="categoryButton_word">ㄷ</button>
          <button className="categoryButton_word">ㄹ</button>
          <button className="categoryButton_word">ㅁ</button>
          <button className="categoryButton_word">ㅂ</button>
          <button className="categoryButton_word">ㅅ</button>
          <button className="categoryButton_word">ㅇ</button>
          <button className="categoryButton_word">ㅈ</button>
          <button className="categoryButton_word">ㅊ</button>
          <button className="categoryButton_word">ㅋ</button>
          <button className="categoryButton_word">ㅌ</button>
          <button className="categoryButton_word">ㅍ</button>
          <button className="categoryButton_word">ㅎ</button>
        </div>
        <br />
        <h2 className="category_title">짤</h2>
        <hr />
        <div className="categoryButton_container">
          <button className="categoryButton_img">TV</button>
          <button className="categoryButton_img">영화</button>
          <button className="categoryButton_img">커뮤니티</button>
          <button className="categoryButton_img">기타</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default MyPage_pw;
