import Header from 'component/Header';
import styled from 'styled-components';
import { getMyPageComment } from '../../api/mypage';
import { Link } from 'react-router-dom';
import { tokenState } from 'stores';
import { useRecoilState } from 'recoil';
import React, { useState, useEffect } from 'react';

function MyPagecomment() {
  const token = useRecoilState(tokenState)[0];
  const [commentResults, setCommentResults] = useState([]);

  useEffect(() => {
    let param = {};
    param = {
      page: 0,
    };
    async function handleUploadComment() {
      const { data } = await getMyPageComment(param, token);

      setCommentResults(data.content);
    }
    handleUploadComment(param);
  }, [token]);

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
              <StLinkNav>북마크</StLinkNav>
            </Link>
            <Link to="/mypage/comment">
              <StLinkNav isClicked={true}> 댓글</StLinkNav>
            </Link>
          </StMyActivityWrapper>
          <Link to="/mypage/pw">
            <StLinkNav>비밀번호 수정</StLinkNav>
          </Link>
        </StMyPageListWrapper>

        <StCommentWrapper>
          {commentResults.length === 0 && <p>등록한 댓글이 없습니다.</p>}
          {commentResults.map((result) => (
            <StCommentItem>
              <StCommentTitle>{result.title} 페이지에 달린 댓글</StCommentTitle>
              <StCommentContent>{result.content}</StCommentContent>
              <StCommentTime>{result.created_date.replace('T', ' ')}</StCommentTime>
            </StCommentItem>
          ))}
        </StCommentWrapper>
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
const StCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 30px 100px;
  margin-top: 100px;
  text-align: center;
  & > p {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }
`;

const StCommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StCommentTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.12);
  width: 276px;
  height: 30px;
`;
const StCommentContent = styled.p`
  margin-left: 20px;
  display: flex;
  justify-content: left;
  color: white;
`;

const StCommentTime = styled.p`
  margin-bottom: 50px;
  margin-left: 20px;
  font-size: small;
  color: gray;
  width: 90%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
export default MyPagecomment;
