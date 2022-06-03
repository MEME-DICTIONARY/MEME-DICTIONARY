import { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import FirstContainer from '../component/mainpage/FirstContainer';
import RankingContainer from '../component/mainpage/RankingContainer';
import styled from 'styled-components';
import { getMemeRanking } from '../api/main';

export default function MainPage() {
  const [wordRankingList, setWordRankingList] = useState([]);
  const [hashTagList, setHashTagList] = useState([]);

  useEffect(() => {
    fetchWordRankingList();
    setHashTagList(['#어쩔티비', '#관짝춤', '#신기방기뿡뿡방기']);
  }, []);

  const fetchWordRankingList = async () => {
    const { data } = await getMemeRanking();
    setWordRankingList(data.content);
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <FirstContainer hashTagList={hashTagList} />
        <RankingContainer wordRankingList={wordRankingList} onClick={fetchWordRankingList} />
        <Footer />
      </MainWrapper>
    </>
  );
}
const MainWrapper = styled.main`
  min-width: fit-content;
`;
