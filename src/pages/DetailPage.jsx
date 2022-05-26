import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import styled from 'styled-components';

function DetailPage() {
  const [imghashtag, imghashtag_change] = useState(['#무야호', '#무한도전']);
  const [wordhashtag, wordhashtag_change] = useState(['#어쩔티비', '#저쩔티비']);
  const [wordLike, addWordLike] = useState(0);
  const [wordWarning, addWordWarning] = useState(0);

  let params = useParams();

  return (
    <>
      <Header />

      {params.type === 'word' ? (
        <StWordWrapper>
          <StTitle>어쩔티비</StTitle>

          <StWordInfo>
            <StWordInfoWrapper>
              <StWordMeaning>뜻</StWordMeaning>
              <StWordContent>
                줄바뀌니?? 어쩌라고, 어쩔건데, 안물어봤는데 등의 의미. 상대방이 귀찮게 하거나
                대답하기 곤란한 질문을 했을 경우에 하는 말로, 상대방을 도발하는 의미
              </StWordContent>
            </StWordInfoWrapper>
            <StExampleWrapper>
              <StWordExample>예문</StWordExample>
              <StWordContent>"야 너 못생김" "어쩔티비"</StWordContent>
            </StExampleWrapper>
          </StWordInfo>

          <StHashtagWrapper>
            <StHashTag>{wordhashtag[0]}</StHashTag>
            <StHashTag>{wordhashtag[1]}</StHashTag>
          </StHashtagWrapper>

          <StButtonWrapper>
            <StBottomBtn>
              <StButtonImg
                src={require('assets/img/detailPage/like.png')}
                alt="좋아요"
                onClick={() => {
                  addWordLike(wordLike + 1);
                }}
              ></StButtonImg>
              {wordLike}
            </StBottomBtn>

            <StBottomBtn>
              <StButtonImg
                src={require('assets/img/detailPage/report.png')}
                alt="신고"
                onClick={() => {
                  addWordWarning(wordWarning + 1);
                }}
              ></StButtonImg>
              {wordWarning}
            </StBottomBtn>

            <StBottomBtn>
              <StBookMarkImg
                src={require('assets/img/detailPage/bookmark.png')}
                alt="북마크"
              ></StBookMarkImg>
            </StBottomBtn>
          </StButtonWrapper>
          <StReplyWrapper>
            <StCommentTitle>댓글 3개</StCommentTitle>
            <StComment type="text" placeholder="  로그인 후 이용 가능합니다."></StComment>
            <StCommentBtn>등록</StCommentBtn>
          </StReplyWrapper>
        </StWordWrapper>
      ) : (
        <>
          <StImgWrapper>
            <StTitle>무야호</StTitle>
            <StBodyImg src={require('assets/img/detailPage/무야호.png')} alt="무야호"></StBodyImg>
            <StImgContent>
              무한도전 197화 '알레스카 편'에 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신
              의미불명의 말이다. 그만큼 신날때 사용하면 유용한 짤이다.
            </StImgContent>
            <StHashtagWrapper>
              <StHashTag>{imghashtag[0]}</StHashTag>
              <StHashTag>{imghashtag[1]}</StHashTag>
            </StHashtagWrapper>
            <StButtonWrapper>
              <StBottomBtn
                onClick={() => {
                  addWordLike(wordLike + 1);
                }}
              >
                <StButtonImg
                  src={require('assets/img/detailPage/like.png')}
                  alt="좋아요"
                ></StButtonImg>
                {wordLike}
              </StBottomBtn>

              <StBottomBtn
                onClick={() => {
                  addWordWarning(wordWarning + 1);
                }}
              >
                <StButtonImg
                  src={require('assets/img/detailPage/report.png')}
                  alt="신고"
                ></StButtonImg>
                {wordWarning}
              </StBottomBtn>

              <StBottomBtn>
                <StBookMarkImg
                  src={require('assets/img/detailPage/bookmark.png')}
                  alt="북마크"
                ></StBookMarkImg>
              </StBottomBtn>
            </StButtonWrapper>
          </StImgWrapper>

          <StReplyWrapper>
            <StCommentTitle>댓글 3개</StCommentTitle>
            <StComment type="text" placeholder="로그인 후 이용 가능합니다."></StComment>
            <StCommentBtn>등록</StCommentBtn>
          </StReplyWrapper>
        </>
      )}
    </>
  );
}

const StWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StWordInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StWordInfoWrapper = styled.div`
  display: flex;
  align-content: space-between;
`;

const StTitle = styled.h1`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 45px;
  margin: 50px;
`;

const CommonH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding-right: 40px;
  color: white;
`;

const StWordMeaning = styled(CommonH2)``;
const StWordExample = styled(CommonH2)``;

const StExampleWrapper = styled.div`
  display: flex;
`;

const StWordContent = styled.p`
  font-size: 30px;
  color: white;
  height: 188px;
  width: 900px;
  margin-bottom: 0;
  margin-top: -5px;
`;

const StHashtagWrapper = styled.div`
  display: flex;
  gap: 34px;
  justify-content: flex-start;
  width: 65%;
`;

const StHashTag = styled.div`
  background-color: #232332;
  color: white;
  border: 3px solid white;
  padding: 5px;
  width: fit-content;
  font-size: 25px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0 6px 19px 0;
`;
const StBottomBtn = styled.button`
  text-align: center;
  width: 70px;
  height: 40px;
  border-radius: 75px;
`;

const StButtonImg = styled.img`
  margin-bottom: -10px;
  width: 30px;
  height: 30px;
`;

const StBookMarkImg = styled.img`
  margin-bottom: -5px;
  width: 30px;
  height: 30px;
`;

const StImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StBodyImg = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 600px;
  height: 350px;
`;

const StImgContent = styled.p`
  padding: 0 185px;
  font-size: 25px;
  margin-bottom: 110px;
  color: white;
`;

const StReplyWrapper = styled.div`
  border-top: 1px solid white;
  padding: 20px;
  width: 97%;
  display: flex;
  justify-content: space-evenly;
`;

const StCommentTitle = styled.h3`
  color: white;
  position: relative;
  left: 50px;
  top: 10px;
`;

const StComment = styled.input`
  position: relative;
  padding-left: 10px;
  left: -60px;
  height: 30px;
  width: 800px;
  border-radius: 30px;
`;

const StCommentBtn = styled.button`
  position: relative;
  padding-bottom: 20px;
  height: 20px;
  right: 270px;
  top: 5px;
`;
export default DetailPage;
