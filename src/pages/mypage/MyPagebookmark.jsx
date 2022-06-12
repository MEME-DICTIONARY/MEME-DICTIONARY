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
    async function handleUploadMeme() {
      const { data } = await getMyPageBookmark(param, token);
      console.log(data);
      console.log(token);

      if (param.type === 'word') {
        setWordResults(data.content);
      } else {
        setImgResults(data.content);
      }
    }
    handleUploadMeme(param);
  }, [isWordClicked, token]);

  return (
    <>
      <Header />
      <StMyPageWrapper>
        <StMyPageListWrapper>
          <Link to="/mypage/upload">
            <StLinkNav>등록한글 </StLinkNav>
          </Link>
          <StMyActivityWrapper isClicked={true}>
            <div>나의 활동</div>
            <Link to="/mypage/bookmark">
              <StLinkNav isClicked={true}>북마크</StLinkNav>
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
const StMyActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > div {
    color: #828282;
    font-weight: bold;
    color: ${({ isClicked }) => isClicked && '#fff'};
  }
`;
const StMyPageListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 150px;
  align-items: center;
  gap: 50px;
`;
const StLinkNav = styled.div`
  color: #828282;
  color: ${({ isClicked }) => isClicked && '#fff'};
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
