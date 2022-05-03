import React, {useState} from 'react';
import styles from '../assets/style/MyPage.module.css';
import Header from '../component/Header.js';
import { Link } from 'react-router-dom';

function MyPage_bookmark() {
  
  let[btn, btnChange]= useState([styles.MyPage_Word_Btn,styles.MyPage_Img_Btn_Unclick]);

  let[content, contentChange]= useState([styles.MyPage_Word_Container, styles.MyPage_Img_Hidden]);
  


  function changeToWord(){
    contentChange([styles.MyPage_Word_Container, styles.MyPage_Img_Hidden]);
    btnChange([styles.MyPage_Word_Btn,styles.MyPage_Img_Btn_Unclick]);
    
  }

  function changeToImg(){
    contentChange([styles.MyPage_Word_Hidden, styles.MyPage_Img_Container]);
    btnChange([styles.MyPage_Word_Btn_Unclick,styles.MyPage_Img_Btn]);
  }
 
  return (
    <div >

   
      <div id={styles.MyPage_Grid}>
        <ul className={styles.MyPage_list_Container}>
          <li className={styles.MyPage_list} > <a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/upload" >등록한 글  </a>
          </li>
          <li className={styles.MyPage_list}><a className={styles.MyPage_link} href="http://localhost:3000/mypage/bookmark" > 
          나의 활동</a>
          <ul className={styles.MyPage_list_child}>
            <li><a className={styles.MyPage_link}  href="http://localhost:3000/mypage/bookmark" >북마크</a></li>
            <li><a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/comment">댓글</a></li>
          </ul>
          </li>
          <li className={styles.MyPage_list}><a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/pw">p/w 수정</a></li>
          <div className={styles.listLine}></div>
        </ul>
        <div>
            <div className={styles.MyPage_Btn_Container}>
              <button className={btn[0]} onClick={changeToWord} > 용어</button>
              <button className={btn[1]} onClick={changeToImg}  > 짤 </button>
            </div>
            <div className={content[0]}>
              <h2 className={styles.MyPage_Word_title}>어쩔티비</h2>
              <p className={styles.MyPage_Word_content}> "어쩌라고 티비나봐"의 줄임말</p>
              <hr/>
              <h2 className={styles.MyPage_Word_title}>깐부</h2>
              <p className={styles.MyPage_Word_content}> "오징어게임" 오일남 할아버지가 성기훈과 구슬치기 게임을 할때 언급되어 유행하였다."오징어게임" 오일남 할아버지가 성기훈과 구슬치기 게임을 할때 언급되어 유행하였다.</p> 
              <hr/>
              <h2 className={styles.MyPage_Word_title}>어쩔티비</h2>
              <p className={styles.MyPage_Word_content}> "어쩌라고 티비나봐"의 줄임말</p>
              <hr/>
              <h2 className={styles.MyPage_Word_title}>어쩔티비</h2>
              <p className={styles.MyPage_Word_content}> "어쩌라고 티비나봐"의 줄임말</p>
              <hr/>
            </div>
            <div className={content[1]}>
              <img className={styles.MyPage_Img} src={require("../assets/img/detailPage/무야호.png")}  alt='짤' />
              <img className={styles.MyPage_Img} src={require("../assets/img/detailPage/computer.jpeg")} alt='짤' />
              <img className={styles.MyPage_Img} src={require("../assets/img/detailPage/community.png")} alt='짤' />
              <img className={styles.MyPage_Img} src={require("../assets/img/detailPage/twitter.jpg")}  alt='짤'/>
              <img className={styles.MyPage_Img} src={require("../assets/img/detailPage/무야호.png")} alt='짤' />
              <img className={styles.MyPage_Img} src={require("../assets/img/detailPage/무야호.png")} alt='짤' />
           

            </div>
        </div>
      </div>

      <Header > </Header>
      
    </div>
    
  );
}

export default MyPage_bookmark;
