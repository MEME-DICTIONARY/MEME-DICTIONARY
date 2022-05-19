import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/style/LandingPage.module.css';
import '../assets/style/reset.css';

import logo_image from '../assets/img/logo.png';

export default function LandingPage() {
  const navigate = useNavigate();
  const circle_left = useRef(null);
  const circle_middle = useRef(null);
  const circle_right = useRef(null);
  const logo = useRef(null);
  const button = useRef(null);

  const onClick = () => {
    button.current.style.opacity = '0';

    circle_left.current.style.transition = 'all ease 2s';
    circle_middle.current.style.transition = 'all ease 2s';
    circle_right.current.style.transition = 'all ease 2s';
    circle_left.current.style.transform = 'translate(200px)';
    circle_right.current.style.transform = 'translate(-200px)';

    circle_left.current.style.opacity = '0';
    circle_middle.current.style.opacity = '0';
    circle_right.current.style.opacity = '0';

    //동그라미 transition 끝난 후 로고 띄우기
    setTimeout(() => {
      circle_left.current.style.display = 'none';
      circle_middle.current.style.display = 'none';
      circle_right.current.style.display = 'none';

      logo.current.style.transition = 'all ease 2s';
      logo.current.style.opacity = '1';
    }, 1500);

    //메인페이지로 이동
    setInterval(() => {
      navigate('/main', { replace: true });
    }, 4000);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main_image_wrapper}>
        <img src={logo_image} alt="logo" ref={logo} />
      </div>
      <main className={styles.landing_main_cont}>
        <div className={styles.landing_main_article} ref={circle_left}>
          <h3 className={styles.landing_main_article_tit}>Archive</h3>
          <p className={styles.landing_main_article_desc}>밈을 기록해보세요</p>
        </div>
        <div className={styles.landing_main_article} ref={circle_middle}>
          <h3 className={styles.landing_main_article_tit}>Dictionary</h3>
          <p className={styles.landing_main_article_desc}>사전처럼 밈을 검색해보세요</p>
        </div>
        <div className={styles.landing_main_article} ref={circle_right}>
          <h3 className={styles.landing_main_article_tit}>Join</h3>
          <p className={styles.landing_main_article_desc}>직접 밈을 등록해보세요</p>
        </div>
      </main>
      <button onClick={onClick} className={styles.lading_main_btn} ref={button}>
        바로가기
      </button>
    </div>
  );
}
