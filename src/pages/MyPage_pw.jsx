import React, {useState} from 'react';
import styles from '../assets/style/MyPage.module.css';
import Header from '../component/Header.js';

function MyPage_pw() {
  
  

  
 
  
  return (
    <div >
        
        <div id={styles.MyPage_Grid}>
        <ul className={styles.MyPage_list_Container}>
          <li className={styles.MyPage_list}><a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/upload">등록한 글</a>
          </li>
          <li className={styles.MyPage_list}><a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/bookmark" >
          나의 활동</a>
          <ul className={styles.MyPage_list_child}>
            <li><a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/bookmark" >북마크</a></li>
            <li><a className={styles.MyPage_nonSelectlink} href="http://localhost:3000/mypage/comment" >댓글</a></li>
          </ul>
          </li>
          <li className={styles.MyPage_list}><a className={styles.MyPage_link} href="http://localhost:3000/mypage/pw">p/w 수정</a></li>
        </ul>

        <div className={styles.MyPage_pw_Container}>
          <h3 className={styles.MyPage_pw}> 현재 비밀번호</h3>
          <input className={styles.MyPage_pw_input} type="text"  />
          <h3 className={styles.MyPage_pw}> 비밀번호 수정</h3>
          <input className={styles.MyPage_pw_input} type="text"  />
          <h3 className={styles.MyPage_pw}>비밀번호 확인</h3>
          <input className={styles.MyPage_pw_input} type="text"  />
          <button className={styles.MyPage_pw_changeBtn}> 변경</button>
          <button className={styles.MyPage_delete}>회원탈퇴</button>
          

      </div>

      
    

    
    

        </div>

    <Header></Header>
    </div>
  );
}

export default MyPage_pw;
