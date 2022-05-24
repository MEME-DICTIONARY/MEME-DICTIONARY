import { React, useState } from 'react';
import Header from '../component/Header';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

function SearchResultPage() {
  const [wordResults] = useState([
    '어쩔티비',
    '어쩔 시크릿쥬쥬 리미티드 에디션',
    '어쩔 삼성비스포크',
  ]);
  const [imgResults] = useState([
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
                <Link to="/detail">
                  <StWordItem key={index}>{result}</StWordItem>
                </Link>
              ))}
            </StWordResultList>
          ) : (
            <StImgResultList>
              {imgResults.map((result, index) => {
                return (
                  <Link to="/detail">
                    <StImgResultItem key={index}>
                      <img src={result.url} alt="짤" />
                      <StImgTitleWrapper>
                        <StImgTitle>{result.name}</StImgTitle>
                      </StImgTitleWrapper>
                    </StImgResultItem>
                  </Link>
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
  width: 100%;
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

const StWordResultList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StWordItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid #696868;
  cursor: pointer;

  &:hover {
    background-color: #696868;
  }
`;

const StImgResultList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 105px;
`;

const StImgResultItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 432px;
  border-bottom: 1px solid #696868;

  & > img {
    width: 100%;
    height: 329px;
    object-fit: cover;
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
