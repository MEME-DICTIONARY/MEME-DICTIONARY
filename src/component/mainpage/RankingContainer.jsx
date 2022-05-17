import styled, { css } from "styled-components";
import LeftSideContainer from "./LeftSideContainer";
import icon_update from "../../assets/img/icon_update.svg";
import sampleImg from "../../assets/img/sample.jpeg";

function RankingContainer({ wordRankingList }) {
  const secondTitle = "WORD RANKING";
  const thirdTitle = "HOT MEME TOP 10";
  const secondDescription =
    "사용자들에게 가장 인기있는 단어 밈 순위입니다. 업데이트 버튼을 클릭하면 실시간 좋아요 수에따라 순위가 변경됩니다.";
  const thirdDescription =
    "인기 급상승 밈 TOP 10 밈과사전이 직접 추천해드립니다.";
  return (
    <>
      <Container section="second">
        <LeftSideContainer
          title={secondTitle}
          description={secondDescription}
        />

        <RightSideOfSecondCont>
          <UpdateButton>
            <img src={icon_update} alt="업데이트" />
            업데이트
          </UpdateButton>
          <WordRankingLists>
            {wordRankingList.map((wordInfo) => {
              return (
                <FlexBox key={wordInfo.id}>
                  <span>{wordInfo.id}</span>
                  <WordRankingList key={wordInfo}>
                    {wordInfo.word}
                  </WordRankingList>
                </FlexBox>
              );
            })}
          </WordRankingLists>
        </RightSideOfSecondCont>
      </Container>

      <Container section="third">
        <LeftSideContainer title={thirdTitle} description={thirdDescription} />

        <RightSideOfThirdContainer>
          <img src={sampleImg} alt="이미지 슬라이더" />
        </RightSideOfThirdContainer>
      </Container>
    </>
  );
}

const FlexBox = styled.ul`
  display: flex;

  & > span {
    padding-right: 80px;
    color: #fff;
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 512px;
  background-color: #232332;
  ${({ section }) =>
    section === "second" &&
    css`
      background: #2e335f;
    `}

  align-items: center;
  justify-content: space-around;
  padding-top: 41px;
`;

const LeftSideOfSecondCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 3px solid transparent;
  background-image: linear-gradient(
    to right,
    #ff0000 0%,
    #d422ff 50%,
    #2737ff 100%
  );
  background-origin: border-box;
  background-clip: border-box;
  display: flex;
  justify-content: center;

  & > h3 {
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    transform: translateY(15px);
    text-shadow: 2px 2px 3px #000;
  }
`;

const RightSideOfSecondCont = styled.div``;

const WordRankingLists = styled.ul`
  width: 510px;
  height: 341px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 65px;
`;

const WordRankingList = styled.li`
  width: 100%;
  text-align: center;
  color: #fff;
  padding-bottom: 20px;
  font-size: 30px;
  /* 한줄 말줄임 */
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  cursor: pointer;
`;

const UpdateButton = styled.button`
  display: flex;
  float: right;
  font-size: 20px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #828282;
`;

const RightSideOfThirdContainer = styled.article`
  background-color: #232332;
  & > img {
    width: 514px;
  }
`;

export default RankingContainer;
