import { React, useState } from "react";
import BaseButton from "../component/BaseButton";
import BaseTag from "../component/BaseTag";
import styled from "styled-components";

function UserUploadPage() {
  const [typeOfMeme, setTypeOfMeme] = useState(null);
  const [imageMeme, setImageMeme] = useState({
    category: "",
    file: "",
    title: "",
    description: "",
    keywords: [],
  });
  const [wordMeme, setWordMeme] = useState({
    word: "",
    meaning: "",
    example: "",
    keywords: [],
  });

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
                <input
                  type="radio"
                  name="카테고리"
                  value={"예능" || ""}
                  onChange={(e) =>
                    setImageMeme({ ...imageMeme, category: e.target.value })
                  }
                />
                <label htmlFor="카테고리">예능</label>
                <input
                  type="radio"
                  name="카테고리"
                  value={"드라마" || ""}
                  onChange={(e) =>
                    setImageMeme({ ...imageMeme, category: e.target.value })
                  }
                />
                <label htmlFor="카테고리">드라마</label>
                <input
                  type="radio"
                  name="카테고리"
                  value={"그 외" || ""}
                  onChange={(e) =>
                    setImageMeme({ ...imageMeme, category: e.target.value })
                  }
                />
                <label htmlFor="카테고리">그 외</label>
              </div>
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                사진
              </strong>
              <input
                type="file"
                className="file"
                value={imageMeme.file || ""}
                onChange={(e) =>
                  setImageMeme({ ...imageMeme, file: e.target.files })
                }
              />
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
                value={imageMeme.title || ""}
                placeholder="밈의 제목을 입력해주세요."
                onChange={(e) =>
                  setImageMeme({ ...imageMeme, title: e.target.value })
                }
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
                value={imageMeme.description || ""}
                placeholder="등록하려는 밈을 설명해주세요."
                onChange={(e) =>
                  setImageMeme({ ...imageMeme, description: e.target.value })
                }
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
                value={imageMeme.keywords || ""}
                placeholder="단어 간 띄어쓰기 없이 최대 3개 입력해주세요. (예시: 무한도전, 무야호, 신나시는거지)"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log(imageMeme.keywords);
                    if (imageMeme.keywords.length === 3) {
                      alert("키워드는 최대 3개까지만 입력할 수 있습니다.");
                      return;
                    }
                    setImageMeme({
                      ...imageMeme,
                      keywords: [...imageMeme.keywords, e.target.value],
                    });
                    e.target.value = "";
                  }
                }}
              />
              <div>
                {imageMeme.keywords &&
                  imageMeme.keywords.map((keyword) => {
                    return (
                      <BaseTag
                        key={keyword}
                        keyword={keyword}
                        deleteTag={(word) => {
                          let updatedArray = imageMeme.keywords;
                          updatedArray.splice(updatedArray.indexOf(word), 1);
                          setImageMeme({
                            ...imageMeme,
                            keywords: updatedArray,
                          });
                        }}
                      ></BaseTag>
                    );
                  })}
              </div>
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
                  value={wordMeme.word || ""}
                  onChange={(e) =>
                    setWordMeme({ ...wordMeme, word: e.target.value })
                  }
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
                value={wordMeme.meaning || ""}
                placeholder="등록하려는 밈의 뜻을 설명해주세요."
                onChange={(e) =>
                  setWordMeme({ ...wordMeme, meaning: e.target.value })
                }
              />
            </li>
            <li className="form__list">
              <strong className="question__title">
                <span>*</span>
                예시
              </strong>
              <input
                className="text__input"
                value={wordMeme.example || ""}
                type="text"
                placeholder="등록하려는 밈의 사용 예시를 들어주세요."
                onChange={(e) =>
                  setWordMeme({ ...wordMeme, example: e.target.value })
                }
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
                  defaultValue={wordMeme.keywords}
                placeholder="단어 간 띄어쓰기 없이 최대 3개 입력해주세요. (예시: 무한도전, 무야호, 신나시는거지)"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (wordMeme.keywords.length === 3) {
                      alert("키워드는 최대 3개까지만 입력할 수 있습니다.");
                      return;
                    }
                    setWordMeme({
                      ...wordMeme,
                      keywords: [...wordMeme.keywords, e.target.value],
                    });
                    e.target.value = "";
                  }
                }}
              />
              <div>
                {wordMeme.keywords &&
                  wordMeme.keywords.map((keyword) => {
                    return (
                      <BaseTag
                        key={keyword}
                        keyword={keyword}
                        deleteTag={(word) => {
                          let updatedArray = wordMeme.keywords;
                          updatedArray.splice(updatedArray.indexOf(word), 1);
                          setWordMeme({
                            ...wordMeme,
                            keywords: updatedArray,
                          });
                        }}
                      ></BaseTag>
                    );
                  })}
              </div>
            </li>
          </>
        ) : null}
        {typeOfMeme !== null ? (
          <BaseButton
            onClick={() => {
              if (typeOfMeme === "신조어") {
                console.log(wordMeme);
              } else {
                console.log(imageMeme);
              }
            }}
            text="등록"
          ></BaseButton>
        ) : null}
      </ul>
    </Form>
  );
}

const Form = styled.form`
  margin-top: 50px;
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
    gap: 10px;
  }
  .form__list {
    width: 570px;
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
    width: 500px;
    height: 35px;
    padding-top: 15px;
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 18px;
    color: #fff;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
      font-size: 14px;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  .form__list .filter__button {
    display: inline-block;
    width: 63px;
    height: 30px;
    background-color: #828282;
    border-radius: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .filter__text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default UserUploadPage;
