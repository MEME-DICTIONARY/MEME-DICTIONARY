import { React, useState } from "react";
import styles from "../assets/style/SearchResultPage.module.css";
import '../assets/style/reset.css';


function SearchResultPage() {
  const [wordResults, setwordResults] = useState([
    "어쩔티비",
    "어쩔 시크릿쥬쥬 리미티드 에디션",
    "어쩔 삼성비스포크",
  ]);
  const [imgResults, setImgResults] = useState(["../assets/img/sample.jpeg"]);
  const [isWordClicked, setIsWordClicked] = useState(true);

  const getImages = () => {
    const itemList = document.querySelector(".result__lists");
    let imageItem = document.createElement('div');
    for (let result of imgResults) {
      imageItem.innerHTML += <li><img src={require({ result })} alt="짤" /></li>;     
    }
    itemList.appendChild(imageItem);
    console.log(itemList);
    return itemList;
  }

  return (
    <div className={styles.searchResult__wrapper}>
      <nav className={styles.searchResult__nav}>
        <li
          className={[styles.nav__list, styles.on].join(" ")}
          onClick={(e) => {
            setIsWordClicked(true);
          }}
        >
          용어
        </li>
        <li
          className={`${styles.nav__list}`}
          onClick={(e) => setIsWordClicked(false)}
        >
          짤
        </li>
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
            <ul className={styles.result__lists}>{ getImages()}</ul>
        )}
      </div>
    </div>
  );
}

export default SearchResultPage;
