import { React, useState, useEffect } from "react";
import Header from "../component/Header";
import styled from "styled-components";

import footer_logo from "../assets/img/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { client } from "../api/index";

export default function MainPage() {
  const [wordRankingList, setWordRankingList] = useState([]);
  const [hashTagList, setHashTagList] = useState([]);
  useEffect(() => {
    showHello();
    setWordRankingList([
      {
        id: 1,
        word: "어쩔티비 저쩔티비 시크릿쥬쥬 삼성티비",
      },
      { id: 2, word: "신기방기 뿡뿡방기 청기백기 동방신기" },
      { id: 3, word: "알잘딱깔센" },
      { id: 4, word: "그냥 꼬옥 안아주면 되" },
      { id: 5, word: "롬곡옾눞" },
    ]);
    setHashTagList(["#어쩔티비", "#관짝춤", "#신기방기뿡뿡방기"]);
  }, []);

  const showHello = async () => {
    const res = await client.get("/hello").then((response)=>{
      console.log(response);
    })
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <FirstContainer>
          <SearchBar>
            <SearchBarInput
              type="text"
              id="search"
              placeholder="키워드를 입력하여 밈을 검색해보세요!"
            />
            <Link to="/search">
              <AiOutlineSearch
                className="search__icon"
                size="50"
                color="#828282"
              />
            </Link>
          </SearchBar>
          <HashTagLists>
            {hashTagList.map((hashTag) => {
              return <HashTagList key={hashTag}>{hashTag}</HashTagList>;
            })}
          </HashTagLists>
        </FirstContainer>

        <SecondContainer>
          <LeftSideOfSecondCont>
            <RankingBox>
              <h3>
                WORD
                <br /> RANKING
              </h3>
            </RankingBox>

            <Desc>
              사용자들에게 가장 인기있는 단어
              <br /> 밈 순위입니다. 업데이트 버튼을 클릭하면 실시간 좋아요 수에
              따라
              <br />
              순위가 변경됩니다.
            </Desc>
          </LeftSideOfSecondCont>
          <RightSideOfSecondCont>
            <UpdateButton>업데이트</UpdateButton>
            <WordRankingLists>
              {wordRankingList.map((wordInfo) => {
                return (
                  <FlexBox key={wordInfo.id}>
                    <span>{wordInfo.id}</span>
                    <WordRankingList key={wordInfo}>{wordInfo.word}</WordRankingList>
                  </FlexBox>
                );
              })}
            </WordRankingLists>
          </RightSideOfSecondCont>
        </SecondContainer>
        <ThirdContainer>
          <LeftSideOfThirdContainer>
            <RankingWrapper>
              <h3>
                HOT MEME
                <br />
                TOP 10
              </h3>
            </RankingWrapper>
            <Desc>
              인기 급상승 밈 TOP 10 <br />
              밈과사전이 직접 추천해드립니다.
            </Desc>
          </LeftSideOfThirdContainer>
          <RightSideOfThirdContainer>
            <img
              src={require("../assets/img/sample.jpeg")}
              alt="이미지 슬라이더"
            />
          </RightSideOfThirdContainer>
        </ThirdContainer>
        <Footer>
          <FooterLogo>
            <img src={footer_logo} alt="푸터로고" />
          </FooterLogo>
          <FooterEmail>meme.dictionary2022@gmail.com</FooterEmail>
          <FooterCopyRight>
            &copy; 2022. 밈과사전 All right reserved
          </FooterCopyRight>
        </Footer>
      </MainWrapper>
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

const MainWrapper = styled.main`
  min-width: fit-content;
`;

//첫 번째 컨테이너
const FirstContainer = styled.div`
  background-color: #232332;
  height: 820px;
  padding: 0 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 114px;
  border-radius: 30px;
  border: 3px solid transparent;
  align-items: center;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #ff0000 0%, #d422ff 50%, #2737ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  .search__icon {
    padding-right: 32px;
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 50%;
  border: none;
  border-radius: 30px;
  text-align: center;
  font-size: 18px;

  &:focus {
    background: none;
  }
  &::placeholder {
    letter-spacing: 0.7px;
  }
`;

const HashTagLists = styled.ul`
  display: flex;
  text-align: end;
  justify-content: end;
  width: 100%;
  margin-top: 24px;
`;

const HashTagList = styled.li`
  color: #fff;
  margin-right: 25px;
  cursor: pointer;
`;
// 두번 째 컨테이너

const Container = styled.div`
  display: flex;
  height: 512px;
  background: #2e335f;
  align-items: center;
  justify-content: space-around;
  padding-top: 41px;
`;

const SecondContainer = styled(Container)``;
const ThirdContainer = styled(Container)`
  background-color: #232332;
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

const Desc = styled.div`
  margin-top: 42px;
  width: 380px;
  color: #bdbdbd;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.5px;
  line-height: 30px;
  text-align: center;
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
  /* &::before {
    display: inline-block;
    content: "";
    position: absolute;
    background: url("../img/icon_update.svg");
  } */
`;

const LeftSideOfThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingWrapper = styled.div`
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
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    position: absolute;
    transform: translateY(25px);
    text-shadow: 2px 2px 3px #000;
  }
`;

const RightSideOfThirdContainer = styled.article`
  background-color: #232332;
  & > img {
    width: 514px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background-color: #2e335f;
  justify-content: center;
  align-items: center;
`;

const FooterLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 33px;

  & > img {
    width: 50%;
  }
`;

const FooterInfo = styled.p`
  color: #fff;
  padding: 10px;
`;
const FooterEmail = styled(FooterInfo)``;
const FooterCopyRight = styled(FooterInfo)`
  margin-bottom: 20px;
`;
