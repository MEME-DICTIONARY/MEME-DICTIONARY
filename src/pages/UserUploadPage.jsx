import { React, useState } from "react";
import styles from "../assets/style/UserUploadPage.module.css";
import BaseButton from "../component/BaseButton";

function UserUploadPage() {
  const [typeOfMeme, setTypeOfMeme] = useState(null);
  const [imageMeme, setImageMeme] = useState(null);
  const handleChangeFile = (e) => {
    setImageMeme(e.target.files);
  };

  return (
    <form className={styles.upload__form}>
      <ul className={styles.form__lists}>
        <li className={styles.form__list}>
          <strong className={styles.form__question}>
            <span>*</span>
            등록할 밈은 어떤 것인가요?
          </strong>
          <div className={styles.input__typeOfMeme}>
            <input
              type="radio"
              name="밈_유형"
              value="신조어"
              onClick={() => {
                setTypeOfMeme("신조어");
              }}
            />
            <label htmlFor="밈_유형">신조어</label>
            <input
              type="radio"
              name="밈_유형"
              value="짤"
              onClick={() => {
                setTypeOfMeme("짤");
              }}
            />
            <label htmlFor="밈_유형">짤</label>
          </div>
        </li>
        {typeOfMeme === "짤" ? (
          <ul>
            <li>
              <strong className={styles.form__question}>
                <span>*</span>
                카테고리 선택
              </strong>
              <div className={styles.input__category}>
                <input
                  type="radio"
                  name="카테고리"
                  value="예능"
                  onClick={() => {
                    setTypeOfMeme("신조어");
                  }}
                />
                <label htmlFor="카테고리">예능</label>
                <input
                  type="radio"
                  name="카테고리"
                  value="드라마"
                  onClick={() => {
                    setTypeOfMeme("짤");
                  }}
                />
                <label htmlFor="카테고리">드라마</label>
                <input
                  type="radio"
                  name="카테고리"
                  value="그 외"
                  onClick={() => {
                    setTypeOfMeme("짤");
                  }}
                />
                <label htmlFor="카테고리">그 외</label>
              </div>
            </li>
            <li>
              <strong className={styles.form__question}>
                <span>*</span>
                사진
              </strong>
              <input type="file" onChange={handleChangeFile} />
              <p>사진을 업로드해주세요.</p>
            </li>
            <li>
              <strong className={styles.form__question}>
                <span>*</span>
                제목
              </strong>
              <input type="text" placeholder="밈의 제목을 입력해주세요." />
            </li>
            <li>
              <strong className={styles.form__question}>
                <span>*</span>
                설명
              </strong>
              <input type="text" placeholder="등록하려는 밈을 설명해주세요." />
            </li>
            <li>
              <strong className={styles.form__question}>
                <span>*</span>
                키워드
              </strong>
              <input
                type="text"
                placeholder="띄어쓰기 없이 입력해주세요. (최대 3개)"
              />
            </li>
          </ul>
        ) : typeOfMeme === "신조어" ? (
          <div>신조어</div>
        ) : null}
        {typeOfMeme !== null ? (
          <BaseButton
            onClick={() => {
              console.log("등록되었습니다.");
            }}
            text="등록"
          ></BaseButton>
        ) : null}
      </ul>
    </form>
  );
}

export default UserUploadPage;
