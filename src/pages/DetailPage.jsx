import React, { useState } from 'react';
import styles from '../assets/style/DetailPage.module.css';
import Header from '../component/Header.js';

function DetailPage() {
  let [imghashtag, imghashtag_change] = useState(['#무야호', '#무한도전', '#신조어']);
  let [wordhashtag, wordhashtag_change] = useState(['#어쩔티비', '#저쩔티비', '#신조어']);
  let [wordLike, addWordLike] = useState(0);
  let [wordWarning, addWordWarning] = useState(0);
  let [imgLike, addImgLike] = useState(0);
  let [imgWarning, addImgWarning] = useState(0);

  return (
    <>
      <Header />
      <div
        className={`${styles.detailPage_WordBody_Container} ${styles.detailPage_WordBody_Hidden}`}
      >
        <h1 className={styles.detailPage_title}>어쩔티비</h1>
        <h2 className={styles.detailPage_WordMeaning}>뜻</h2>
        <h2 className={styles.detailPage_WordExample}>예문</h2>
        <p className={styles.detailPage_wordContent}>
          줄바뀌니?? 어쩌라고, 어쩔건데, 안물어봤는데 등의 의미. 상대방이 귀찮게 하거나 대답하기
          곤란한 질문을 했을 경우에 하는 말로, 상대방을 도발하는 의미
        </p>
        <br />
        <br />
        <p className={styles.detailPage_wordContent}>"야 너 못생김" "어쩔티비"</p>

        <div className={styles.detailPage_hashtagParent}>
          <div className={styles.detailPage_hashtag}>{wordhashtag[0]}</div>
          <div className={styles.detailPage_hashtag}>{wordhashtag[1]}</div>
          <div className={styles.detailPage_hashtag}>{wordhashtag[2]}</div>
        </div>

        <div className={styles.detailPage_buttonParent}>
          <button className={styles.detailPage_bottombtn}>
            <img
              className={styles.detailPage_buttonimg}
              src={require('../assets/img/detailPage/like.png')}
              alt="좋아요"
              onClick={() => {
                addWordLike(wordLike + 1);
              }}
            />
            {wordLike}
          </button>
          <button className={styles.detailPage_bottombtn}>
            <img
              className={styles.detailPage_buttonimg}
              src={require('../assets/img/detailPage/report.png')}
              alt="신고"
              onClick={() => {
                addWordWarning(wordWarning + 1);
              }}
            />
            {wordWarning}
          </button>
          <button className={styles.detailPage_bottombtn}>
            <img
              className={styles.detailPage_bookmarkimg}
              src={require('../assets/img/detailPage/bookmark.png')}
              alt="북마크"
            />
          </button>
        </div>
      </div>

      <div className={`${styles.detailPage_imgBody_Container} ${styles.detailPage_imgBody_Hidden}`}>
        <h1 className={styles.detailPage_title}>무야호</h1>
        <img
          className={styles.detailPage_bodyImg}
          src={require('../assets/img/detailPage/무야호.png')}
          alt="무야호"
        />
        <p className={styles.detailPage_imgContent}>
          무한도전 197화 '알레스카 편'에 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신
          의미불명의 말이다. 그만큼 신날때 사용하면 유용한 짤이다.
        </p>
        <div className={styles.detailPage_hashtagParent}>
          <div className={styles.detailPage_hashtag}>{imghashtag[0]}</div>
          <div className={styles.detailPage_hashtag}>{imghashtag[1]}</div>
          <div className={styles.detailPage_hashtag}>{imghashtag[2]}</div>
        </div>

        <div className={styles.detailPage_buttonParent}>
          <button className={styles.detailPage_bottombtn}>
            <img
              className={styles.detailPage_buttonimg}
              src={require('../assets/img/detailPage/like.png')}
              alt="좋아요"
              onClick={() => {
                addImgLike(imgLike + 1);
              }}
            />
            {imgLike}
          </button>
          <button className={styles.detailPage_bottombtn}>
            <img
              className={styles.detailPage_buttonimg}
              src={require('../assets/img/detailPage/report.png')}
              alt="신고"
              onClick={() => {
                addImgWarning(imgWarning + 1);
              }}
            />
            {imgWarning}
          </button>
          <button className={styles.detailPage_bottombtn}>
            <img
              className={styles.detailPage_bookmarkimg}
              src={require('../assets/img/detailPage/bookmark.png')}
              alt="북마크"
            />
          </button>
        </div>
      </div>

      <div className={styles.detailPage_Bottom_Container}>
        <h3 className={styles.detailPage_CommentTitle}>댓글 3개</h3>
        <input
          className={styles.detailPage_Comment}
          type="text"
          placeholder="  로그인 후 이용 가능합니다."
        />
        <button className={styles.detailPage_commentbtn}>등록</button>
      </div>
    </>
  );
}

export default DetailPage;
