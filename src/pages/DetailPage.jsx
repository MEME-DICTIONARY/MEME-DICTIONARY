import React, { useState } from 'react';
import Header from '../component/Header.js';
import styled, { css } from 'styled-components';

function DetailPage({ isWord }) {
  const [imghashtag, imghashtag_change] = useState(['#무야호', '#무한도전']);
  const [wordhashtag, wordhashtag_change] = useState(['#어쩔티비', '#저쩔티비']);
  const [wordLike, addWordLike] = useState(0);
  const [wordWarning, addWordWarning] = useState(0);

  return (
    <>
      <Header />

      <StWordWrapper isWord={isWord}>
        <StTitle>어쩔티비</StTitle>

        <StWordInfo>
          <StWordInfoWrapper>
            <StWordMeaning>뜻</StWordMeaning>
            <StWordContent>
              줄바뀌니?? 어쩌라고, 어쩔건데, 안물어봤는데 등의 의미. 상대방이 귀찮게 하거나 대답하기
              곤란한 질문을 했을 경우에 하는 말로, 상대방을 도발하는 의미
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
              src={require('../assets/img/detailPage/like.png')}
              alt="좋아요"
              onClick={() => {
                addWordLike(wordLike + 1);
              }}
            ></StButtonImg>
            {wordLike}
          </StBottomBtn>

          <StBottomBtn>
            <StButtonImg
              src={require('../assets/img/detailPage/report.png')}
              alt="신고"
              onClick={() => {
                addWordWarning(wordWarning + 1);
              }}
            ></StButtonImg>
            {wordWarning}
          </StBottomBtn>

          <StBottomBtn>
            <StBookMarkImg
              src={require('../assets/img/detailPage/bookmark.png')}
              alt="북마크"
            ></StBookMarkImg>
          </StBottomBtn>
        </StButtonWrapper>
      </StWordWrapper>

      <StImgWrapper isWord={isWord}>
        <StTitle>무야호</StTitle>
        <StBodyImg src={require('../assets/img/detailPage/무야호.png')} alt="무야호"></StBodyImg>
        <StImgContent>
          무한도전 197화 '알레스카 편'에 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신
          의미불명의 말이다. 그만큼 신날때 사용하면 유용한 짤이다.
        </StImgContent>
        <StHashtagWrapper>
          <StHashTag>{imghashtag[0]}</StHashTag>
          <StHashTag>{imghashtag[1]}</StHashTag>
        </StHashtagWrapper>
        <StButtonWrapper>
          <StBottomBtn>
            <StButtonImg
              src={require('../assets/img/detailPage/like.png')}
              alt="좋아요"
              onClick={() => {
                addWordLike(wordLike + 1);
              }}
            ></StButtonImg>
            {wordLike}
          </StBottomBtn>

          <StBottomBtn>
            <StButtonImg
              src={require('../assets/img/detailPage/report.png')}
              alt="신고"
              onClick={() => {
                addWordWarning(wordWarning + 1);
              }}
            ></StButtonImg>
            {wordWarning}
          </StBottomBtn>

          <StBottomBtn>
            <StBookMarkImg
              src={require('../assets/img/detailPage/bookmark.png')}
              alt="북마크"
            ></StBookMarkImg>
          </StBottomBtn>
        </StButtonWrapper>
      </StImgWrapper>

      <StButtomWrapper>
        <StCommentTitle>댓글 3개</StCommentTitle>
        <StComment type="text" placeholder="  로그인 후 이용 가능합니다."></StComment>
        <StCommentBtn>등록</StCommentBtn>
      </StButtomWrapper>
    </>
  );
}

const StWordWrapper = styled.div`
  /*display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;*/

  display: none;
  ${(isWord) =>
    isWord === false &&
    css`
      display: none;
    `}
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
  font-size: 30px;
  margin: 50px;
`;

const StWordMeaning = styled.h2`
  font-weight: bold;
  padding-right: 40px;
  color: white;
`;

const StExampleWrapper = styled.div`
  display: flex;
`;

const StWordExample = styled.h2`
  font-weight: bold;
  padding-right: 40px;
  color: white;
`;

const StWordContent = styled.p`
  line-height: 20px;
  color: white;
  height: 188px;
  width: 900px;
  margin-bottom: 0;
  margin-top: -5px;
`;

const StHashtagWrapper = styled.div`
  display: flex;
  width: 1000px;
  justify-content: flex-start;
`;

const StHashTag = styled.div`
  background-color: #232332;
  color: white;
  border: 1px solid white;
  width: 100px;
  height: 30px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StButtonWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: flex-end;
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

  /*display: none;*/
  ${(isWord) =>
    isWord === false &&
    css`
      display: none;
    `}
`;

const StBodyImg = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 600px;
  height: 350px;
`;

const StImgContent = styled.p`
  margin-bottom: 30px;
  color: white;
`;

const StButtomWrapper = styled.div`
  border-top: 1px solid white;
  padding: 20px;
  width: 97%;
  display: flex;
  position: absolute;
  top: 110%;
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
