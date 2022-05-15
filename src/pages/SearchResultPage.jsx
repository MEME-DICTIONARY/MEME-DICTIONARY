import { React, useState } from "react";
import "../assets/style/reset.css";
import Header from "../component/Header";
import styled, { css } from "styled-components";

function SearchResultPage() {
  const [wordResults, setwordResults] = useState([
    "어쩔티비",
    "어쩔 시크릿쥬쥬 리미티드 에디션",
    "어쩔 삼성비스포크",
  ]);
  const [imgResults, setImgResults] = useState([
    {
      name: "어쩔어쩔티비",
      url: require("../assets/img/sample.jpeg"),
    },
    {
      name: "어쩔 티비",
      url: require("../assets/img/sample.jpeg"),
    },
    {
      name: "어쩔 시크릿쥬쥬 리미티드 에디션",
      url: require("../assets/img/sample.jpeg"),
    },
  ]);
  const [isWordClicked, setIsWordClicked] = useState(true);

  return (
    <>
      <Header />
      <MainWrapper>
        <TypeNav>
          <NavList
            isWordClicked={isWordClicked}
            onClick={() => {
              setIsWordClicked(true);
            }}
          >
            용어
          </NavList>
          <NavList
            isWordClicked={!isWordClicked}
            onClick={() => setIsWordClicked(false)}
          >
            짤
          </NavList>
        </TypeNav>

        <ResultContainer>
          {isWordClicked ? (
            <WordResultLists>
              {wordResults.map((result, index) => (
                <WordResultList key={index}>{result}</WordResultList>
              ))}
            </WordResultLists>
          ) : (
            <ImgResultLists>
              {imgResults.map((result, index) => {
                return (
                  <ImgResultList key={index}>
                    <img src={result.url} alt="짤" />
                    <ImgResultListTitle>{result.name}</ImgResultListTitle>
                  </ImgResultList>
                );
              })}
            </ImgResultLists>
          )}
        </ResultContainer>
      </MainWrapper>
    </>
  );
}

export default SearchResultPage;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #232332;
  color: #fff;
  min-width: 100%;
  min-height: 100%;
`;

const TypeNav = styled.nav`
  display: flex;
  margin: 121px 0 57px 51px;
  color: #696868;
`;

const NavList = styled.li`
  font-size: 24px;
  font-weight: 700;
  list-style: none;
  cursor: pointer;
  ${(props) =>
    props.isWordClicked &&
    css`
      color: #fff;
    `};

  &:first-child::after {
    display: inline-block;
    content: "";
    width: 2px;
    height: 20px;
    background-color: #696868;
    vertical-align: middle;
    margin: 0 7px;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 51px;
`;

const WordResultLists = styled.ul``;

const UnderLine = styled.li`
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #696868;
  cursor: pointer;
`;

const WordResultList = styled(UnderLine)``;

const ImgResultLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 105px;
`;

const ImgResultList = styled(UnderLine)`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 329px;
  & > img {
    width: 100%;
  }
`;

const ImgResultListTitle = styled.strong`
  margin: auto 0;
  text-indent: 15px;
  font-size: 24px;
  font-weight: 700;
`;
