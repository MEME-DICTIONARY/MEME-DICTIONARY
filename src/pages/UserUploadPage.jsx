import { React, useState } from "react";
import BaseButton from "../component/BaseButton";
import styled from "styled-components";

function UserUploadPage() {
  const [typeOfMeme, setTypeOfMeme] = useState(null);
  const [imageMeme, setImageMeme] = useState(null);
  const handleChangeFile = (e) => {
    setImageMeme(e.target.files);
  };

  return (
    <Form>
      <ul className="form__lists">
        <li className="form__list">
          <strong className="question__title">
            <span>*</span>
            등록할 밈은 어떤 것인가요?
          </strong>
          <div className="question__answer">
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
          <>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                카테고리 선택
              </strong>
              <div className="question__answer">
                <input type="radio" name="카테고리" value="예능" />
                <label htmlFor="카테고리">예능</label>
                <input type="radio" name="카테고리" value="드라마" />
                <label htmlFor="카테고리">드라마</label>
                <input type="radio" name="카테고리" value="그 외" />
                <label htmlFor="카테고리">그 외</label>
              </div>
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                사진
              </strong>
              <input type="file" onChange={handleChangeFile} className="file" />
              <p>사진을 업로드해주세요.</p>
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                제목
              </strong>
              <input
                className="text__input"
                type="text"
                placeholder="밈의 제목을 입력해주세요."
              />
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                설명
              </strong>
              <input
                className="text__input"
                type="text"
                placeholder="등록하려는 밈을 설명해주세요."
              />
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                키워드
              </strong>
              <input
                className="text__input"
                type="text"
                placeholder="띄어쓰기 없이 입력해주세요. (최대 3개)"
              />
            </li>
          </>
        ) : typeOfMeme === "신조어" ? (
          <>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                단어
              </strong>
              <div className="filter__text-wrapper">
                <input
                  className="text__input"
                  type="text"
                  placeholder="단어를 입력해주세요."
                  value=""
                />
                <button type="button" className="filter__button">
                  필터링
                </button>
              </div>
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>뜻
              </strong>
              <input
                className="text__input"
                type="text"
                placeholder="등록하려는 밈의 뜻을 설명해주세요."
              />
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                예시
              </strong>
              <input
                className="text__input"
                type="text"
                placeholder="등록하려는 밈의 사용 예시를 들어주세요."
              />
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                키워드
              </strong>
              <input
                className="text__input"
                type="text"
                placeholder="띄어쓰기 없이 입력해주세요.(최대 3단어)"
              />
            </li>
          </>
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
    </Form>
  );
}

const Form = styled.form`
margin-top:50px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 0.5px;

  span {
    color: red;
    vertical-align: middle;
  }

  .form__lists {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .form__list {
    width:570px;
    margin: 20px 0;
  }

  .question__answer {
    margin: 20px auto;
  }
  .form__list > .file + p {
    font-size: 14px;
    color: #bdbdbd;
    margin-top: 15px;
  }
  .form__list input + label {
    padding-right: 25px;
  }
  .form__list .text__input {
    display: block;
    width:500px;
    height: 35px;
    padding-top:15px;
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  .form__list .filter__button {
    display: inline-block;
    width:63px;
    height:30px;
    background-color: #828282;
    border-radius: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .filter__text-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

export default UserUploadPage;
