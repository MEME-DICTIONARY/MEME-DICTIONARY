import { React, useState } from "react";
import styles from "../assets/style/SearchResultPage.module.css";
import "../assets/style/reset.css";
import Header from "../component/Header";

function SearchResultPage() {
  const [wordResults, setwordResults] = useState([
    "어쩔티비",
    "어쩔 시크릿쥬쥬 리미티드 에디션",
    "어쩔 삼성비스포크",
  ]);
  const [imgResults, setImgResults] = useState([
    {
      name: "어쩔어쩔티비",
      url: require("../assets/img/sample.jpeg"),
    },
    {
      name: "어쩔 티비",
      url: require("../assets/img/sample.jpeg"),
    },
    {
      name: "어쩔 시크릿쥬쥬 리미티드 에디션",
      url: require("../assets/img/sample.jpeg"),
    },
  ]);
  const [isWordClicked, setIsWordClicked] = useState(true);

  return (
    <>
      <Header />
      <div className={styles.searchResult__wrapper}>
        <nav className={styles.searchResult__nav}>
          <li
            className={styles.nav__list}
            style={isWordClicked ? { color: "#fff" } : null}
            onClick={() => {
              setIsWordClicked(true);
            }}
          >
            용어
          </li>
          <li
            className={styles.nav__list}
            style={!isWordClicked ? { color: "#fff" } : null}
            onClick={() => setIsWordClicked(false)}
          >
            짤
          </li>
        </nav>

        <div className={styles.result__container}>
          {isWordClicked ? (
            <ul className={styles.result__lists__word}>
              {wordResults.map((result, index) => (
                <li key={index} className={styles.result__list__word}>
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <ul className={styles.result__lists__img}>
              {imgResults.map((result, index) => {
                return (
                  <li className={styles.result__list__img} key={index}>
                    <img src={result.url} alt="짤" />
                    <strong className={styles.result__title}>
                      {result.name}
                    </strong>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResultPage;
