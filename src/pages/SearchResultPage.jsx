import { React, useState } from "react";
import styles from "../assets/style/SearchResultPage.module.css";

function SearchResultPage() {
  const [wordResults, setwordResults] = useState([
    "어쩔티비",
    "어쩔 시크릿쥬쥬 리미티드 에디션",
    "어쩔 삼성비스포크",
  ]);
  const [imgResults, setImgResults] = useState([]);
  const [isWordClicked, setIsWordClicked] = useState(true);

  return (
    <div className={styles.searchResult__wrapper}>
      <nav className={styles.searchResult__nav}>
        <li className={[styles.nav__list, styles.on].join(" ")} onClick={(e) => { setIsWordClicked(true); }}>용어</li>
        <li className={ `${styles.nav__list}`} onClick={(e) => setIsWordClicked(false)}>짤</li>
      </nav>

      <div className={styles.result__container}>
        {isWordClicked ? (
          <ul className={styles.result__lists}>
            {wordResults.map((result, index) => (
              <li key={index} className={styles.result__list}>
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.result__lists}>
            {imgResults.map((result, index) => {
              <li>
                <img src={result} alt="짤" />
              </li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResultPage;
