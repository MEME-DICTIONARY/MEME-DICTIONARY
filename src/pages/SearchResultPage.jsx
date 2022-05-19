import { React, useState } from 'react';
import Header from '../component/Header';
import styled, { css } from 'styled-components';

function SearchResultPage() {
  const [wordResults, setwordResults] = useState([
    '어쩔티비',
    '어쩔 시크릿쥬쥬 리미티드 에디션',
    '어쩔 삼성비스포크',
  ]);
  const [imgResults, setImgResults] = useState([
    {
      name: '어쩔어쩔티비',
      url: require('../assets/img/sample.jpeg'),
    },
    {
      name: '어쩔 티비',
      url: require('../assets/img/sample.jpeg'),
    },
    {
      name: '어쩔 시크릿쥬쥬 리미티드 에디션',
      url: require('../assets/img/sample.jpeg'),
    },
  ]);
  const [isWordClicked, setIsWordClicked] = useState(true);

  return (
    <>
      <Header />
      <StWrapper>
        <StTypeNav>
          <StNavList
            isWordClicked={isWordClicked}
            onClick={() => {
              setIsWordClicked(true);
            }}
          >
            용어
          </StNavList>
          <StNavList isWordClicked={!isWordClicked} onClick={() => setIsWordClicked(false)}>
            짤
          </StNavList>
        </StTypeNav>

        <StResultWrapper>
          {isWordClicked ? (
            <StWordResultList>
              {wordResults.map((result, index) => (
                <StWordItem key={index}>{result}</StWordItem>
              ))}
            </StWordResultList>
          ) : (
            <StImgResultList>
              {imgResults.map((result, index) => {
                return (
                  <StImgResultItem key={index}>
                    <img src={result.url} alt="짤" />
                    <StImgTitleWrapper>
                      <StImgTitle>{result.name}</StImgTitle>
                    </StImgTitleWrapper>
                  </StImgResultItem>
                );
              })}
            </StImgResultList>
          )}
        </StResultWrapper>
      </StWrapper>
    </>
  );
}

export default SearchResultPage;

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #232332;
  color: #fff;
  min-width: 100%;
  min-height: 100%;
`;

const StTypeNav = styled.nav`
  display: flex;
  margin: 85px 0 57px 51px;
  color: #696868;
`;

const StNavList = styled.li`
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
    content: '';
    width: 2px;
    height: 20px;
    background-color: #696868;
    vertical-align: middle;
    margin: 0 7px;
  }
`;

const StResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 51px;
`;

const StWordResultList = styled.ul``;

const UnderLine = styled.li`
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #696868;
  cursor: pointer;
`;

const StWordItem = styled(UnderLine)``;

const StImgResultList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
`;

const StImgResultItem = styled(UnderLine)`
  display: flex;
  flex-direction: column;
  width: 330px;
  & > img {
    width: 100%;
  }
`;

const StImgTitleWrapper = styled.div`
  width: inherit;
  padding: 36px 0;
`;

const StImgTitle = styled.strong`
  margin: auto 0;
  text-indent: 15px;
  font-size: 16px;
  font-weight: 700;
`;
