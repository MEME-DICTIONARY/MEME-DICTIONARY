import Header from 'component/Header';
import styled from 'styled-components';
import { getMyPageComment } from '../../api/mypage';
import { connect } from 'react-redux';
import { useRecoilState } from 'recoil';
import { tokenState } from 'stores';
import { useEffect, useState } from 'react';

function MyPagecomment() {
  const [commentResults, setCommentResults] = useState([]);

  useEffect(() => {
    handleComment();
  });

  const token = useRecoilState(tokenState)[0];

  const handleComment = async () => {
    const { data } = await getMyPageComment(token);
    setResults(data);
  };

  const setResults = (data) => {
    setCommentResults(
      data.content.map((res) => ({
        title: res.title,
        content: res.content,
        created_date: res.created_date,
      }))
    );
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
                <StMyPageNonSelectLink href="/mypage/bookmark"> 북마크</StMyPageNonSelectLink>
              </li>
              <li>
                <StMyPageLink href="/mypage/comment"> 댓글</StMyPageLink>
              </li>
            </StMyPageListChild>
          </StMyPageList>
          <StMyPageList>
            <StMyPageNonSelectLink href="/mypage/pw"> p/w 수정</StMyPageNonSelectLink>
          </StMyPageList>
        </StMyPageListWrapper>
        <StCommentWrapper>
          <StCommentTitle>
            <strong>무야호 페이지</strong>에 남긴 댓글
          </StCommentTitle>
          <StCommentContent>무야호 제가 자주 쓰죠 허허;</StCommentContent>
          <StCommentTime>22/03/28 11:29</StCommentTime>
          <StCommentTitle>
            <strong>무야호 페이지</strong>에 남긴 댓글
          </StCommentTitle>
          <StCommentContent>무야호 제가 자주 쓰죠 허허;</StCommentContent>
          <StCommentTime>22/03/28 11:29</StCommentTime>
          <StCommentTitle>
            <strong>무야호 페이지</strong>에 남긴 댓글
          </StCommentTitle>
          <StCommentContent>무야호 제가 자주 쓰죠 허허;</StCommentContent>
          <StCommentTime>22/03/28 11:29</StCommentTime>
        </StCommentWrapper>
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
const StCommentWrapper = styled.div`
  position: relative;
  left: 150px;
  top: 150px;
  height: 500px;
  width: 1200px;
`;

const StCommentTitle = styled.p`
  margin-bottom: 10px;
  padding-top: 10px;
  color: white;
  text-align: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.12);
  width: 276px;
  height: 30px;
`;
const StCommentContent = styled.p`
  margin-bottom: 0;
  width: 90%;
  color: white;
  position: relative;
  left: 50px;
`;

const StCommentTime = styled.p`
  margin-bottom: 50px;
  font-size: small;
  color: gray;
  width: 90%;
  position: relative;
  left: 50px;
`;
export default MyPagecomment;
connect(mapStateToProps, null)(MyPagecomment);
