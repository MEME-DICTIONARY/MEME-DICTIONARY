import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../assets/style/LandingPage.module.css"


export default function LandingPage() {
    const navigate = useNavigate();

    const onClick = () => {
        setTimeout(() => {
            //각 원 article 중앙 translate 애니메이션, /home으로 이동'
        }, 3000);
        navigate('/main', { replace: true });
    }
    return (
        <div className={styles.mainContainer}>
            <main className={styles.landing_main_cont}>
                <article className={styles.landing_main_article}>
                    <h3 className={styles.landing_main_article_tit}>Archive</h3>
                    <p className={styles.landing_main_article_desc}>밈을 기록해보세요</p>
                </article>
                <article className={styles.landing_main_article}>
                    <h3 className={styles.landing_main_article_tit}>Dictionary</h3>
                    <p className={styles.landing_main_article_desc}>사전처럼 밈을 검색해보세요</p>
                </article>
                <article className={styles.landing_main_article}>
                    <h3 className={styles.landing_main_article_tit}>Join</h3>
                    <p className={styles.landing_main_article_desc}>직접 밈을 등록해보세요</p>
                </article>
            </main>
            <button onClick={onClick} className={styles.lading_main_btn}>바로가기</button>
        </div>
    )
}
