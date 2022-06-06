import Header from 'component/Header';
import styled from 'styled-components';
import { getMyPageComment } from '../../api/mypage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return state;
};

function MyPagecomment() {
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
