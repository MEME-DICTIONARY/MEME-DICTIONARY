import { React, useState } from "react";
import styles from "../assets/style/SearchResultPage.module.css";

function SearchResultPage() {
  const [results, setResults] = useState([
    "어쩔티비",
    "어쩔 시크릿쥬쥬 리미티드 에디션",
    "어쩔 삼성비스포크",
    
  ]);
  return (
    <div className={styles.searchResult__wrapper}>
      <nav className={styles.searchResult__nav}>
        <a href="/search">용어</a>
        <a href="/search">짤</a>
      </nav>

      <div className={styles.result__container}>
        <ul className={styles.result__lists}>
          {results.map((result,index) => (
              <li key={index} className={styles.result__list}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResultPage;
