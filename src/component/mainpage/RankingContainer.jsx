import styled, { css } from 'styled-components';
import LeftSideContainer from './LeftSideContainer';
import icon_update from 'assets/img/icon_update.svg';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

function RankingContainer({ wordRankingList, onClick }) {
  let navigate = useNavigate();

  const secondTitle = 'WORD RANKING';
  const thirdTitle = 'HOT MEME TOP 5';
  const secondDescription =
    '사용자들에게 가장 인기있는 단어 밈 순위입니다. 업데이트 버튼을 클릭하면 실시간 좋아요 수에 따라 순위가 변경됩니다.';
  const thirdDescription = '인기 급상승 밈 TOP 5 밈과사전이 직접 추천해드립니다.';

  const onClickRankingItem = (postId) => {
    navigate(`/detail/word/${postId}`);
  };

  return (
    <>
      <StContainer section="second">
        <LeftSideContainer title={secondTitle} description={secondDescription} />

        <StRightSideOfSecondCont>
          <StUpdateButton>
            <img src={icon_update} alt="업데이트" onClick={onClick} />
            업데이트
          </StUpdateButton>
          <StWordRankingLists>
            {wordRankingList.map((wordInfo, idx) => {
              return (
                <FlexBox key={wordInfo.id}>
                  <span>{idx + 1}</span>
                  <StWordRankingList key={wordInfo} onClick={() => onClickRankingItem(wordInfo.id)}>
                    {wordInfo.title}
                  </StWordRankingList>
                </FlexBox>
              );
            })}
          </StWordRankingLists>
        </StRightSideOfSecondCont>
      </StContainer>

      <StContainer section="third">
        <LeftSideContainer title={thirdTitle} description={thirdDescription} />

        <ImageCarousel />
      </StContainer>
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

const StContainer = styled.div`
  display: flex;
  height: 512px;
  background-color: #232332;
  ${({ section }) =>
    section === 'second' &&
    css`
      background: #2e335f;
    `}

  align-items: center;
  justify-content: space-around;
  padding-top: 41px;
`;

const StRightSideOfSecondCont = styled.div``;

const StWordRankingLists = styled.ul`
  width: 510px;
  height: 341px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 65px;
`;

const StWordRankingList = styled.li`
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

const StUpdateButton = styled.button`
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

// const StRightSideOfThirdContainer = styled.article`
//   background-color: #232332;
//   & img {
//     width: 514px;
//   }
// `;

export default RankingContainer;
