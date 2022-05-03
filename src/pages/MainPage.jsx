import React from "react";
import Header from "../component/Header";
import styles from "../assets/style/MainPage.module.css";
import "../assets/style/reset.css";

import footer_logo from "../assets/img/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
 
      <main className={styles.mainpage_main_wrap}>
        <div className={styles.first_cont}>
          <div className={styles.searchBar}>
            <input
              type="text"
              id="search"
              placeholder="키워드를 입력하여 밈을 검색해보세요!"
            />
            <Link to="/search">
              <AiOutlineSearch
                className={styles.searchIcon}
                size="50"
                color="#828282"
              />
            </Link>
          </div>
          <ul className={styles.searchBar_hashTags}>
            <li className={styles.searchBar_hashTag}>#어쩔티비</li>
            <li className={styles.searchBar_hashTag}>#관짝춤</li>
            <li className={styles.searchBar_hashTag}>#신기방기뿡뿡방기</li>
          </ul>
        </div>
        <div className={styles.second_cont}>
          <div className={styles.leftSide}>
            <div className={styles.ranking}>
              <h3>
                WORD
                <br /> RANKING
              </h3>
            </div>

            <p className={styles.second_cont_left_desc}>
              사용자들에게 가장 인기있는 단어
              <br /> 밈 순위입니다. 업데이트 버튼을 클릭하면 실시간 좋아요 수에
              따라
              <br />
              순위가 변경됩니다.
            </p>
          </div>
          <article className={styles.rightSide}>
            <button>업데이트</button>
            <ul className={styles.word_ranking_lists}>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    paddingRight: "80px",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                >
                  1
                </span>
                <li className={styles.word_ranking_list}>
                  어쩔티비 저쩔티비 시크릿쥬쥬 삼성티비 어쩔티비 저쩔티비
                  시크릿쥬쥬 삼성티비
                </li>
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    paddingRight: "80px",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                >
                  2
                </span>
                <li className={styles.word_ranking_list}>
                  신기방기 뿡뿡방기 청기백기 동방신기
                </li>
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    paddingRight: "80px",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                >
                  3
                </span>
                <li className={styles.word_ranking_list}>알잘딱깔센</li>
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    paddingRight: "80px",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                >
                  4
                </span>
                <li className={styles.word_ranking_list}>
                  그냥 꼬옥 안아주면 되
                </li>
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    paddingRight: "80px",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                >
                  5
                </span>
                <li className={styles.word_ranking_list}>롬곡옾눞</li>
              </div>
            </ul>
          </article>
        </div>
        <div className={styles.third_cont}>
          <div className={styles.leftSide}>
            <div className={styles.ranking}>
              <h3>
                HOT MEME
                <br />
                TOP 10
              </h3>
            </div>
            <p className={styles.third_cont_left_desc}>
              인기 급상승 밈 TOP 10 <br />
              밈과사전이 직접 추천해드립니다.
            </p>
          </div>
          <article className={styles.rightSide}>
            <img
              src={require("../assets/img/sample.jpeg")}
              alt="이미지 슬라이더"
            />
          </article>
        </div>
        <footer className={styles.footer}>
          <a href="/main" className={styles.footer_logo}>
            <img src={footer_logo} alt="푸터로고" />
          </a>
          <p className={styles.footer_email}>meme.dictionary2022@gmail.com</p>
          <p className={styles.footer_copyright}>
            &copy; 2022. 밈과사전 All right reserved
          </p>
        </footer>
      </main>
      <Header></Header>
    </>
  );
}
