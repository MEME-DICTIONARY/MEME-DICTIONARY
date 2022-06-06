import React, { useState, useEffect } from 'react';
import Header from 'component/Header';
import styled from 'styled-components';
import { getMyPageUpload } from '../../api/mypage';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from 'stores';

function MyPageupload() {
  const token = useRecoilState(tokenState)[0];

  const [isWordClicked, setIsWordClicked] = useState(true);
  const [wordResults, setWordResults] = useState([]);
  const [imgResults, setImgResults] = useState([]);

  useEffect(() => {
    let param = {};
    if (!isWordClicked) {
      param = {
        type: 'image',
        page: 0,
      };
    } else {
      param = {
        type: 'word',
        page: 0,
      };
    }
    handleUploadMeme(param);
  }, []);

  const handleUploadMeme = async (parameter) => {
    const { data } = await getMyPageUpload(parameter, token);
    if (parameter.type === 'word') {
      setWordResults(data.content);
    } else {
      setImgResults(data.content);
    }
  };

  return (
    <>
      <Header />
      <StMyPageWrapper>
        <StMyPageListWrapper>
          <Link to="/mypage/upload">
            <StLinkNav isClicked={true}>등록한글 </StLinkNav>
          </Link>
          <StMyActivityWrapper>
            <div>나의 활동</div>
            <Link to="/mypage/bookmark">
              <StLinkNav>북마크</StLinkNav>
            </Link>
            <Link to="/mypage/comment">
              <StLinkNav> 댓글</StLinkNav>
            </Link>
          </StMyActivityWrapper>
          <Link to="/mypage/pw">
            <StLinkNav>비밀번호 수정</StLinkNav>
          </Link>
        </StMyPageListWrapper>

        <StMemeInfoWrapper>
          <StTypeNav>
            <StNavList
              isWordClicked={isWordClicked}
              onClick={() => {
                setIsWordClicked(true);
              }}
            >
              용어
            </StNavList>
            <StNavList isWordClicked={!isWordClicked} onClick={() => setIsWordClicked(false)}>
              짤
            </StNavList>
          </StTypeNav>
          {isWordClicked ? (
            <StMyPageWordWrapper>
              {!wordResults.length && <div>등록한 MEME이 없습니다!</div>}
              {wordResults.map((result) => (
                <Link to={`/detail/word/${result.id}`} key={result.id}>
                  <StWordItem>
                    <StWordTitle>{result.title}</StWordTitle>
                    <StWordContent>{result.description}</StWordContent>
                  </StWordItem>
                </Link>
              ))}
            </StMyPageWordWrapper>
          ) : (
            <>
              {!imgResults.length && <div>등록한 MEME이 없습니다!</div>}
              {imgResults.map((result) => (
                <StMyPageImgWrapper
                  key={result.id}
                  src={require('assets/img/detailPage/무야호.png')}
                  alt="짤"
                ></StMyPageImgWrapper>
              ))}
            </>
          )}
        </StMemeInfoWrapper>
      </StMyPageWrapper>
    </>
  );
}

const StMyPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  z-index: 1;
  width: 100%;
`;
const StMyActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > div {
    color: #828282;
    font-weight: bold;
  }
`;
const StMyPageListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 190px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 150px;
  align-items: center;
  gap: 50px;
`;
const StLinkNav = styled.div`
  color: #828282;
  color: ${({ isClicked }) => isClicked && '#fff'};
`;

const StTypeNav = styled.nav`
  display: flex;
  margin: 85px 0 57px 51px;
  color: #696868;
`;
const StNavList = styled.li`
  font-size: 24px;
  font-weight: 700;
  list-style: none;
  cursor: pointer;
  color: ${(props) => props.isWordClicked && '#fff'};

  &:first-child::after {
    display: inline-block;
    content: '';
    width: 2px;
    height: 20px;
    background-color: #696868;
    vertical-align: middle;
    margin: 0 7px;
  }
`;

const StMemeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 30px 100px;
`;
const StMyPageWordWrapper = styled.div`
  margin-left: 50px;
`;

const StWordItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
`;

const StWordTitle = styled.h2`
  font-weight: bold;
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
  margin-top: 30px;
`;
const StWordContent = styled.p`
  width: 900px;
  color: white;
  margin-bottom: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StMyPageImgWrapper = styled.img`
  margin-left: 50px;
  width: 300px;
  height: 225px;
`;

export default MyPageupload;
