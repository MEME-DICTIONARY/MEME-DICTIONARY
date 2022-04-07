import React from "react";
import styles from "../assets/style/MainPage.module.css"
import { AiOutlineSearch } from "react-icons/ai";

export default function MainPage() {
    return (
        <main className={styles.mainpage_main_wrap}>
            <div className={styles.firstContainer}>
                <div className={styles.searchBar}>
                    <input type="text" id="search" placeholder="키워드를 입력하여 밈을 검색해보세요!" />
                    <AiOutlineSearch className={styles.searchIcon} size="50" color="#828282" />
                </div>
                <ul>
                    <li>#어쩔티비</li>
                    <li>#관짝춤</li>
                    <li>#신기방기뿡뿡방기</li>
                </ul>
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.ranking}><h3>WORD<br /> RANKING</h3></div>

                    <p>
                        사용자들에게 가장
                        인기있는 단어<br /> 밈 순위입니다.
                        업데이트 버튼을 클릭하면
                        실시간 좋아요 수에 따라<br />
                        순위가 변경됩니다.
                    </p>
                </div>
                <article className={styles.rightSide}>
                    <button>업데이트</button>
                    <ul>
                        <div style={{ display: 'flex' }}><span style={{ paddingRight: '80px', color: '#fff', fontSize: '30px' }}>1</span><li>어쩔티비 저쩔티비 시크릿쥬쥬 삼성티비 어쩔티비 저쩔티비 시크릿쥬쥬 삼성티비</li></div>
                        <div style={{ display: 'flex' }}><span style={{ paddingRight: '80px', color: '#fff', fontSize: '30px' }}>2</span><li>신기방기 뿡뿡방기 청기백기 동방신기</li></div>
                        <div style={{ display: 'flex' }}><span style={{ paddingRight: '80px', color: '#fff', fontSize: '30px' }}>3</span><li>알잘딱깔센</li></div>
                        <div style={{ display: 'flex' }}><span style={{ paddingRight: '80px', color: '#fff', fontSize: '30px' }}>4</span><li>그냥 꼬옥 안아주면 되</li></div>
                        <div style={{ display: 'flex' }}><span style={{ paddingRight: '80px', color: '#fff', fontSize: '30px' }}>5</span><li>롬곡옾눞</li></div>
                    </ul>
                </article>
            </div>
            <div className={styles.thirdContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.ranking}><h3>HOT MEME<br />TOP 10</h3></div>
                    <p>
                        인기 급상승 밈 TOP 10 <br />
                        밈과사전이 직접 추천해드립니다.
                    </p>
                </div>
                <article className={styles.rightSide}>
                    <img src={require("../assets/img/sample.jpeg")} alt="이미지 슬라이더" />
                </article>
            </div>
            <footer>
                <a href="/" className={styles.logo}>로고</a>
                <p>저희공유메일@gmail.com</p>
                <p>&copy; 2022. 밈과사전 All right reserved</p>
            </footer>
        </main>
    );
}
