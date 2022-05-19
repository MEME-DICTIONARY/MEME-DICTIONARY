import React, { useState } from 'react';
import styles from '../assets/style/MyPage.module.css';
import Header from '../component/Header.js';

function MyPagecomment() {
  return (
    <div>
      <Header />
      <div id={styles.MyPage_Grid}>
        <ul className={styles.MyPage_list_Container}>
          <li className={styles.MyPage_list}>
            <a className={styles.MyPage_nonSelectlink} href="/mypage/upload">
              등록한 글
            </a>
          </li>
          <li className={styles.MyPage_list}>
            <a className={styles.MyPage_link} href="/mypage/bookmark">
              나의 활동
            </a>
            <ul className={styles.MyPage_list_child}>
              <li>
                <a className={styles.MyPage_nonSelectlink} href="/mypage/bookmark">
                  북마크
                </a>
              </li>
              <li>
                <a className={styles.MyPage_link} href="/mypage/comment">
                  댓글
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.MyPage_list}>
            <a className={styles.MyPage_nonSelectlink} href="/mypage/pw">
              p/w 수정
            </a>
          </li>
          <div className={styles.listLine}></div>
        </ul>

        <div className={styles.MyPage_comment_Container}>
          <p className={styles.MyPage_commentTitle}>
            <strong>무야호 페이지</strong>에 남긴 댓글
          </p>
          <p className={styles.MyPage_commentContent}>무야호 제가 자주 쓰죠 허허;</p>
          <p className={styles.MyPage_commentTime}>22/03/28 11:29</p>
          <p className={styles.MyPage_commentTitle}>
            <strong>무야호 페이지</strong>에 남긴 댓글
          </p>
          <p className={styles.MyPage_commentContent}>무야호 제가 자주 쓰죠 허허;</p>
          <p className={styles.MyPage_commentTime}>22/03/28 11:29</p>
          <p className={styles.MyPage_commentTitle}>
            <strong>무야호 페이지</strong>에 남긴 댓글
          </p>
          <p className={styles.MyPage_commentContent}>
            무야호 제가 자주 쓰죠 허허 길게 썻을때를 위한 글씨글씨 그리씨;
          </p>
          <p className={styles.MyPage_commentTime}>22/03/28 11:29</p>
        </div>
      </div>
    </div>
  );
}

export default MyPagecomment;
