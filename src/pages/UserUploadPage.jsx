import { useState, useRef, useEffect } from 'react';
import BaseButton from '../component/base/BaseButton';
import BaseTag from '../component/base/BaseTag';
import BaseModal from '../component/base/BaseModal';
import styled from 'styled-components';
import { postUploadWordMeme, postUploadImageMeme, filterForbiddenWord } from '../api/upload';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from 'stores';
import * as Hangul from 'hangul-js';

export default function UserUploadPage() {
  let navigator = useNavigate();
  const inputRef = useRef();
  const token = useRecoilState(tokenState)[0];

  const [typeOfMeme, setTypeOfMeme] = useState(null);
  const [imageMeme, setImageMeme] = useState({
    category: '',
    file: '',
    title: '',
    description: '',
    keywords: [],
  });
  const [wordMeme, setWordMeme] = useState({
    word: '',
    meaning: '',
    example: '',
    keywords: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const typeOfMemeList = [
    {
      name: '밈_유형',
      value: '단어',
      onClick: () => {
        setTypeOfMeme('단어');
      },
    },
    {
      name: '밈_유형',
      value: '짤',
      onClick: () => {
        setTypeOfMeme('짤');
      },
    },
  ];
  const categoryList = [
    {
      name: '카테고리',
      value: 'TV' || '',
    },
    {
      name: '카테고리',
      value: '영화' || '',
    },
    {
      name: '카테고리',
      value: '커뮤니티' || '',
    },
    {
      name: '카테고리',
      value: '기타' || '',
    },
  ];

  const handlePostWordMeme = async () => {
    const body = {
      type: 'word',
      category: Hangul.disassemble(wordMeme.word)[0],
      title: wordMeme.word,
      description: wordMeme.meaning,
      example: wordMeme.example,
      keyw: wordMeme.keywords[0],
      keyww: wordMeme.keywords[1] === undefined ? null : wordMeme.keywords[1],
      keywww: wordMeme.keywords[2] === undefined ? null : wordMeme.keywords[2],
    };
    const response = await postUploadWordMeme(body, token);
    response && navigator('/main');
  };

  const handlePostImageMeme = async () => {
    setImageMeme({ ...imageMeme, file: inputRef.current.files });

    const formDataInfo = new FormData();
    let body = {
      type: 'image',
      category: imageMeme.category,
      title: imageMeme.title,
      description: imageMeme.description,
      keyw: imageMeme.keywords[0],
      keyww: imageMeme.keywords[1] === undefined ? null : imageMeme.keywords[1],
      keywww: imageMeme.keywords[2] === undefined ? null : imageMeme.keywords[2],
    };
    const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });

    const imageFormData = new FormData();
    imageFormData.append('image', imageMeme.file);

    formDataInfo.append('requestDto', blob);
    formDataInfo.append('image', imageMeme.file);

    const response = await postUploadImageMeme(formDataInfo, token);
    response && navigator('/main');
  };

  const onClickFilteringButton = async () => {
    setIsClicked(true);

    setShowModal(true);
    setModalContents('등록할 수 있는 단어입니다.');

    if (wordMeme.word) {
      const { data } = await filterForbiddenWord(wordMeme.word);
      //금지단어에 속한 단어라면 alert
      if (data === true) {
        setShowModal(true);
        setModalContents('사용할 수 없는 금지 단어입니다!');
        setWordMeme({ ...wordMeme, word: '' });
        return;
      }
    }
  };

  const onClickUploadButton = () => {
    if (typeOfMeme === '단어') {
      if (
        wordMeme.word === '' ||
        wordMeme.meaning === '' ||
        wordMeme.example === '' ||
        wordMeme.keywords.length === 0
      ) {
        setShowModal(true);
        setModalContents('빈 칸을 모두 채워주세요!');
        return;
      } else if (!isClicked) {
        setShowModal(true);
        setModalContents('단어 필터링 버튼을 클릭해주세요.');
        return;
      }
      handlePostWordMeme();
    } else {
      console.log(imageMeme.file);
      if (
        imageMeme.title === '' ||
        imageMeme.description === '' ||
        imageMeme.category === '' ||
        imageMeme.file === '' ||
        imageMeme.keywords.length === 0
      ) {
        setShowModal(true);
        setModalContents('빈 칸을 모두 채워주세요!');
        return;
      }

      handlePostImageMeme();
    }
  };

  useEffect(() => {
    console.log(imageMeme.file);
  }, [imageMeme.file]);

  return (
    <StWrapper>
      <StQuestionList>
        <StQuestionItem>
          <span>*</span>
          등록할 밈은 어떤 것인가요?
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {typeOfMemeList.map((item, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={(e) => item.onClick(e.target.value)}
                />
                <label htmlFor={item.name}>{item.value}</label>
              </div>
            ))}
          </div>
        </StQuestionItem>

        {typeOfMeme === '짤' ? (
          <>
            <StQuestionItem>
              <span>*</span>
              카테고리 선택
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                {categoryList.map((item, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      id={item.name}
                      name={item.name}
                      value={item.value}
                      onChange={(e) => setImageMeme({ ...imageMeme, category: e.target.value })}
                    />
                    <label htmlFor={item.name}>{item.value}</label>
                  </div>
                ))}
              </div>
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>
              사진
              <StImageUploadButton
                type="button"
                onClick={() => {
                  inputRef.current.click();
                }}
              >
                +
              </StImageUploadButton>
              <input type="file" className="file" style={{ display: 'none' }} ref={inputRef} />
              <label
                onClick={() => {
                  setImageMeme({ ...imageMeme, file: inputRef.current.files });
                }}
              >
                사진 업로드
              </label>
              <p style={{ color: '#fff' }}>{imageMeme.file && inputRef.current.files[0].name}</p>
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>
              제목
              <StInput
                type="text"
                value={imageMeme.title || ''}
                placeholder="밈의 제목을 입력해주세요."
                onChange={(e) => setImageMeme({ ...imageMeme, title: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>
              설명
              <StInput
                type="text"
                value={imageMeme.description || ''}
                placeholder="등록하려는 밈을 설명해주세요."
                onChange={(e) => setImageMeme({ ...imageMeme, description: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>
              키워드
              <StInput
                type="text"
                placeholder="단어 간 띄어쓰기 없이 최대 3개 입력해주세요. (예시: 무한도전, 무야호, 신나시는거지)"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (imageMeme.keywords.length === 3) {
                      setShowModal(true);
                      setModalContents('키워드는 최대 3개까지만 입력할 수 있습니다.');
                      return;
                    }
                    setImageMeme({
                      ...imageMeme,
                      keywords: [...imageMeme.keywords, e.target.value.replace(/ /g, '')],
                    });
                    e.target.value = '';
                  }
                }}
              />
              <BaseModal
                hidden={!showModal}
                content={modalContents}
                hideModal={() => {
                  setShowModal(false);
                }}
              />
              <StKeyWordWrapper>
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
              </StKeyWordWrapper>
            </StQuestionItem>
          </>
        ) : typeOfMeme === '단어' ? (
          <>
            <StQuestionItem>
              <span>*</span>
              단어
              <StFilterWordWrapper>
                <StInput
                  type="text"
                  placeholder="단어를 입력해주세요."
                  value={wordMeme.word || ''}
                  onChange={(e) => {
                    setIsClicked(false);
                    setWordMeme({ ...wordMeme, word: e.target.value });
                  }}
                />
                <StFilterButton type="button" onClick={onClickFilteringButton}>
                  필터링
                </StFilterButton>
              </StFilterWordWrapper>
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>뜻
              <StInput
                type="text"
                value={wordMeme.meaning || ''}
                placeholder="등록하려는 밈의 뜻을 설명해주세요."
                onChange={(e) => setWordMeme({ ...wordMeme, meaning: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>
              예시
              <StInput
                value={wordMeme.example || ''}
                type="text"
                placeholder="등록하려는 밈의 사용 예시를 들어주세요."
                onChange={(e) => setWordMeme({ ...wordMeme, example: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <span>*</span>
              키워드
              <StInput
                type="text"
                placeholder="단어 간 띄어쓰기 없이 최대 3개 입력해주세요. (예시: 무한도전, 무야호, 신나시는거지)"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (wordMeme.keywords.length === 3) {
                      setShowModal(true);
                      setModalContents('키워드는 최대 3개까지만 입력할 수 있습니다.');
                      return;
                    }
                    setWordMeme({
                      ...wordMeme,
                      keywords: [...wordMeme.keywords, e.target.value.replace(/ /g, '')],
                    });
                    e.target.value = '';
                  }
                }}
              />
              <BaseModal
                hidden={!showModal}
                content={modalContents}
                hideModal={() => {
                  setShowModal(false);
                }}
              />
              <StKeyWordWrapper>
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
              </StKeyWordWrapper>
            </StQuestionItem>
          </>
        ) : null}
        {typeOfMeme !== null ? (
          <BaseButton onClick={onClickUploadButton} text="등록"></BaseButton>
        ) : null}
      </StQuestionList>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  margin-top: 50px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: 0.5px;
`;

const StQuestionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > input + label {
    padding-right: 25px;
  }
  & > .file + p {
    font-size: 14px;
    color: #bdbdbd;
    margin-top: 15px;
  }
`;
const StQuestionItem = styled.li`
  width: 570px;
  margin: 20px 0;
  & > span {
    color: red;
    vertical-align: middle;
  }
`;
const StInput = styled.input`
  display: block;
  width: 500px;
  height: 35px;
  padding: 15px 0;
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
`;
const StKeyWordWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
const StFilterButton = styled.button`
  display: inline-block;
  width: 63px;
  height: 30px;
  background-color: #828282;
  border-radius: 20px;
  border: none;
  color: #fff;
`;
const StFilterWordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StImageUploadButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 30px;
`;
