import React from 'react';
import '../assets/style/MyPage.module.css'
import '../assets/style/Header.module.css';
import Header from '../component/Header.js';

function  MyPage_bookmark() {
  
  function openCategoryModal(){
    const modal=document.querySelector(".categoryModal");
    modal.classList.remove("categoryModalHidden");
  }
  function closeCategoryModal(){
    const modal=document.querySelector(".categoryModal");
    modal.classList.add("categoryModalHidden");
  }

  
  function openWord(){
    const myPageWordBtn = document.querySelector(".MyPage_Word_Btn");
    const myPageImgBtn= document.querySelector(".MyPage_Img_Btn");
    const myPage_Img = document.querySelector(".MyPage_Img_Container");
    const myPage_Word = document.querySelector(".MyPage_Word_Container");
    myPageWordBtn.style.fontWeight= "bold";
    myPageWordBtn.style.color="white";
    myPageImgBtn.style.color="gray";
    myPage_Word.classList.remove("MyPage_Word_Hidden");
    myPage_Img.classList.add("MyPage_Img_Hidden");
  }

  function openImg(){
    const myPageWordBtn = document.querySelector(".MyPage_Word_Btn");
    const myPageImgBtn= document.querySelector(".MyPage_Img_Btn");
    const myPage_Img = document.querySelector(".MyPage_Img_Container");
    const myPage_Word = document.querySelector(".MyPage_Word_Container");
    myPageImgBtn.style.fontWeight= "bold";
    myPageWordBtn.style.color="gray";
    myPageImgBtn.style.color="white";
    myPage_Img.classList.remove("MyPage_Img_Hidden");
    myPage_Word.classList.add("MyPage_Word_Hidden");
  }
  
  return (
    <div>

    <Header onClick={openCategoryModal}></Header>
      <div id="MyPage_Grid">
        <ul className="MyPage_list_Container">
          <li className="MyPage_list">
            <a className="MyPage_nonSelectlink" href="App.js">등록한 글</a>
          </li>
          <li className="MyPage_list"><a className="MyPage_link" href="MyPage_bookmark.html">
          나의 활동
        </a><ul className="MyPage_list_child">
            <li><a className="MyPage_link" href="MyPage_bookmark.html">북마크</a></li>
            <li><a className="MyPage_nonSelectlink" href="MyPage_comment.html">댓글</a></li>
          </ul>
          </li>
          <li className="MyPage_list"><a className="MyPage_nonSelectlink" href="App.js">p/w 수정</a></li>
        </ul>
        <div>
            <div className="MyPage_Btn_Container">
              <button className="MyPage_Word_Btn"  onClick={openWord}> 용어</button>
              <button className="MyPage_Img_Btn" onClick={openImg}> 짤 </button>
            </div>
            <div className="MyPage_Img_Container MyPage_Img_Hidden ">
              <img className="MyPage_Img" src={require("../assets/img/detailPage/무야호.png")}  alt='짤' />
              <img className="MyPage_Img" src={require("../assets/img/detailPage/computer.jpeg")} alt='짤' />
              <img className="MyPage_Img" src={require("../assets/img/detailPage/community.png")} alt='짤' />
              <img className="MyPage_Img" src={require("../assets/img/detailPage/twitter.jpg")}  alt='짤'/>
              <img className="MyPage_Img" src={require("../assets/img/detailPage/무야호.png")} alt='짤' />
              <img className="MyPage_Img" src={require("../assets/img/detailPage/무야호.png")} alt='짤' />
            </div>
            <div className="MyPage_Word_Container ">
            <h2 className="MyPage_Word_title">어쩔티비</h2>
            <p className="MyPage_Word_content"> "어쩌라고 티비나봐"의 줄임말</p>
            <hr/>
            <h2 className="MyPage_Word_title">깐부</h2>
            <p className="MyPage_Word_content"> "오징어게임" 오일남 할아버지가 성기훈과 구슬치기 게임을 할때 언급되어 유행하였다."오징어게임" 오일남 할아버지가 성기훈과 구슬치기 게임을 할때 언급되어 유행하였다.</p> 
            <hr/>
            <h2 className="MyPage_Word_title">어쩔티비</h2>
            <p className="MyPage_Word_content"> "어쩌라고 티비나봐"의 줄임말</p>
            <hr/>
            <h2 className="MyPage_Word_title">어쩔티비</h2>
            <p className="MyPage_Word_content"> "어쩌라고 티비나봐"의 줄임말</p>
            <hr/>

            </div>
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

export default MyPage_bookmark;
