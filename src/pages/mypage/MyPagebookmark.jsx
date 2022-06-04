import { useState, useEffect } from 'react';
import Header from 'component/Header';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import { tokenState } from 'stores';
import { getMyPageBookmark } from 'api/mypage';
import { Link } from 'react-router-dom';

function MyPagebookmark() {
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
    const { data } = await getMyPageBookmark(parameter, token);
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
          <StMyPageList>
            <StMyPageNonSelectLink href="/mypage/upload"> 등록한글 </StMyPageNonSelectLink>
          </StMyPageList>
          <StMyPageList>
            <StMyPageLink href="/mypage/bookmark"> 나의 활동 </StMyPageLink>
            <StMyPageListChild>
              <li>
                <StMyPageLink href="/mypage/bookmark"> 북마크</StMyPageLink>
              </li>
              <li>
                <StMyPageNonSelectLink href="/mypage/comment"> 댓글</StMyPageNonSelectLink>
              </li>
            </StMyPageListChild>
          </StMyPageList>
          <StMyPageList>
            <StMyPageNonSelectLink href="/mypage/pw"> p/w 수정</StMyPageNonSelectLink>
          </StMyPageList>
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
            <StBookmarkedMemeWrapper isEmpty={!wordResults.length}>
              {!wordResults.length && <strong>북마크한 MEME이 없습니다!</strong>}
              {wordResults.map((result) => (
                <Link to={`/detail/word/${result.id}`} key={result.id}>
                  <StWordItem>
                    <StWordTitle>{result.title}</StWordTitle>
                    <StWordContent>{result.description}</StWordContent>
                  </StWordItem>
                </Link>
              ))}
            </StBookmarkedMemeWrapper>
          ) : (
            <StBookmarkedMemeWrapper isEmpty={!wordResults.length}>
              {!imgResults.length && <strong>북마크한 MEME이 없습니다!</strong>}
              {imgResults.map((result) => (
                <img key={result.id} src={require('assets/img/detailPage/무야호.png')} alt="짤" />
              ))}
            </StBookmarkedMemeWrapper>
          )}
        </StMemeInfoWrapper>
      </StMyPageWrapper>
    </>
  );
}
const StMyPageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  z-index: 1;
  height: 100%;
  top: 10%;
`;
const StMyPageListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  top: 10px;
  width: 190px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  height: 100vh;
`;

const StMyPageList = styled.li`
  position: relative;
  top: 130px;
  background-color: #232332;
  font-size: large;
  list-style: none;
  padding-bottom: 130px;
  padding-left: 30%;
`;

const StMyPageLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
const StMyPageNonSelectLink = styled.a`
  text-decoration: none;
  color: gray;
`;
const StMyPageListChild = styled.ul`
  background-color: #232332;
  list-style: none;
  position: relative;
  left: -25px;
  padding-top: 10px;
  text-align: center;
  line-height: 25px;
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
  color: white;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
const StBookmarkedMemeWrapper = styled.div`
  margin-left: 50px;
  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    `}
  & > strong {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;
export default MyPagebookmark;
