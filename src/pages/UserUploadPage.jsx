import { useState, useEffect } from 'react';
import BaseButton from '../component/base/BaseButton';
import BaseTag from '../component/base/BaseTag';
import BaseModal from '../component/base/BaseModal';
import RadioInputForm from '../component/useruploadpage/RadioInputForm';
import styled from 'styled-components';
import { postUploadMeme, filterForbiddenWord } from '../api/upload';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
  return state;
};

function UserUploadPage({ token, isLogin }) {
  useEffect(() => {
    console.log('isLogin: ' + isLogin);
  }, []);
  let navigator = useNavigate();
  const [typeOfMeme, setTypeOfMeme] = useState(null);
  const [imageMeme, setImageMeme] = useState({
    id: 0,
    category: '',
    file: '',
    title: '',
    description: '',
    keywords: [],
  });
  const [wordMeme, setWordMeme] = useState({
    id: 0,
    word: '',
    meaning: '',
    example: '',
    keywords: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const onClickRadioInput = (e) => {
    setImageMeme({ ...imageMeme, category: e.target.value });
  };
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
      value: '예능' || '',
      onClick: onClickRadioInput,
    },
    {
      name: '카테고리',
      value: '드라마' || '',
      onClick: onClickRadioInput,
    },
    {
      name: '카테고리',
      value: '그 외' || '',
      onClick: onClickRadioInput,
    },
  ];

  const handlePostWordMeme = async () => {
    const body = {
      type: typeOfMeme,
      category: null,
      title: wordMeme.word,
      description: wordMeme.meaning,
      example: wordMeme.example,
      keyw: wordMeme.keywords[0],
      keyww: wordMeme.keywords[1],
      keywww: wordMeme.keywords[2],
    };
    await postUploadMeme(body, token);
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
      console.log(wordMeme);
      navigator('/main');
    } else {
      console.log(imageMeme);
      const formData = new FormData();
      formData.append('file', imageMeme.file);
      navigator('/main');
    }
  };

  return (
    <StWrapper>
      <StQuestionList>
        <StQuestionItem>
          <StQuestionTitle>
            <span>*</span>
            등록할 밈은 어떤 것인가요?
          </StQuestionTitle>
          <StQuestionAnswer>
            <RadioInputForm inputList={typeOfMemeList} />
          </StQuestionAnswer>
        </StQuestionItem>

        {typeOfMeme === '짤' ? (
          <>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                카테고리 선택
              </StQuestionTitle>
              <StQuestionAnswer>
                <RadioInputForm inputList={categoryList} />
              </StQuestionAnswer>
            </StQuestionItem>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                사진
              </StQuestionTitle>
              <input
                type="file"
                className="file"
                onChange={(e) => {
                  setImageMeme({ ...imageMeme, file: e.target.files[0] });
                }}
              />
              <p>사진을 업로드해주세요.</p>
            </StQuestionItem>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                제목
              </StQuestionTitle>
              <StInput
                type="text"
                value={imageMeme.title || ''}
                placeholder="밈의 제목을 입력해주세요."
                onChange={(e) => setImageMeme({ ...imageMeme, title: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                설명
              </StQuestionTitle>
              <StInput
                type="text"
                value={imageMeme.description || ''}
                placeholder="등록하려는 밈을 설명해주세요."
                onChange={(e) => setImageMeme({ ...imageMeme, description: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                키워드
              </StQuestionTitle>
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
              <StQuestionTitle>
                <span>*</span>
                단어
              </StQuestionTitle>
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
              <StQuestionTitle>
                <span>*</span>뜻
              </StQuestionTitle>
              <StInput
                type="text"
                value={wordMeme.meaning || ''}
                placeholder="등록하려는 밈의 뜻을 설명해주세요."
                onChange={(e) => setWordMeme({ ...wordMeme, meaning: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                예시
              </StQuestionTitle>
              <StInput
                value={wordMeme.example || ''}
                type="text"
                placeholder="등록하려는 밈의 사용 예시를 들어주세요."
                onChange={(e) => setWordMeme({ ...wordMeme, example: e.target.value })}
              />
            </StQuestionItem>
            <StQuestionItem>
              <StQuestionTitle>
                <span>*</span>
                키워드
              </StQuestionTitle>
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

const StWrapper = styled.form`
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
`;
const StQuestionTitle = styled.strong`
  & > span {
    color: red;
    vertical-align: middle;
  }
`;
const StInput = styled.input`
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
`;
const StQuestionAnswer = styled.div`
  margin: 20px auto;
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

export default connect(mapStateToProps, null)(UserUploadPage);
