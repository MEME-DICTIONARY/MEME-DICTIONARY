import { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import FirstContainer from '../component/mainpage/FirstContainer';
import RankingContainer from '../component/mainpage/RankingContainer';
import styled from 'styled-components';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};

function MainPage({ isLogin }) {
  const [wordRankingList, setWordRankingList] = useState([]);
  const [hashTagList, setHashTagList] = useState([]);

  useEffect(() => {
    console.log(isLogin);
    setWordRankingList([
      {
        id: 1,
        word: '어쩔티비 저쩔티비 시크릿쥬쥬 삼성티비',
      },
      { id: 2, word: '신기방기 뿡뿡방기 청기백기 동방신기' },
      { id: 3, word: '알잘딱깔센' },
      { id: 4, word: '그냥 꼬옥 안아주면 되' },
      { id: 5, word: '롬곡옾눞' },
    ]);
    setHashTagList(['#어쩔티비', '#관짝춤', '#신기방기뿡뿡방기']);
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        <FirstContainer hashTagList={hashTagList} />
        <RankingContainer wordRankingList={wordRankingList} />
        <Footer />
      </MainWrapper>
    </>
  );
}
const MainWrapper = styled.main`
  min-width: fit-content;
`;

export default connect(mapStateToProps, null)(MainPage);
