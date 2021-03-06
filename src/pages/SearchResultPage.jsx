import { useState, useEffect } from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getMemeWithKeyWord } from '../api/posts';
import BasePagination from 'component/base/BasePagination';

function SearchResultPage() {
  let params = useParams();

  const [wordResults, setWordResults] = useState([]);
  const [imgResults, setImgResults] = useState([]);
  const [isWordClicked, setIsWordClicked] = useState(false);
  const [wordTotalPages, setWordTotalPages] = useState(0);
  const [imageTotalPages, setImageTotalPages] = useState(0);

  const handleImageMeme = async (page) => {
    const param = {
      keyword: params.keyword,
      type: 'image',
      page: page,
    };
    const { data } = await getMemeWithKeyWord(param);
    setImageTotalPages(data.totalPages);

    setImgResults(
      data.content.map((res) => ({
        id: res.id,
        title: res.title,
        url: res.image,
      }))
    );
  };
  const handleWordMeme = async (page) => {
    if (!wordResults.length) {
      const param = {
        keyword: params.keyword,
        type: 'word', //처음엔 짤로 초기화
        page: page,
      };
      const { data } = await getMemeWithKeyWord(param);
      setWordTotalPages(data.totalPages);

      setWordResults(
        data.content.map((res) => ({
          id: res.id,
          title: res.title,
        }))
      );
    }
  };
  useEffect(() => {
    handleImageMeme(0);
    handleWordMeme(0);
  }, []);

  const onClickPagination = (cur) => {
    handleImageMeme(cur);
    handleWordMeme(cur);
  };

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
              {wordResults.length === 0 && (
                <div
                  style={{
                    display: 'flex',
                    height: 'calc(100vh/2)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  검색 결과가 없습니다.
                </div>
              )}
              {wordResults.map((result) => (
                <Link to={`/detail/word/${result.id}`}>
                  <StWordItem key={result.id}>{result.title}</StWordItem>
                </Link>
              ))}
              {wordResults.length !== 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                  <BasePagination
                    totalPage={wordTotalPages}
                    onClickPage={(cur) => onClickPagination(cur)}
                  />
                </div>
              )}
            </StWordResultList>
          ) : (
            <>
              <StImgResultList>
                {imgResults.length === 0 && (
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: 'calc(100vh/2)',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    검색 결과가 없습니다.
                  </div>
                )}
                {imgResults.map((result) => {
                  return (
                    <Link to={`/detail/image/${result.id}`}>
                      <StImgResultItem key={result.id}>
                        <img src={result.url} alt="짤" />
                        <StImgTitleWrapper key={result.id}>
                          <StImgTitle key={result.id}>{result.title}</StImgTitle>
                        </StImgTitleWrapper>
                      </StImgResultItem>
                    </Link>
                  );
                })}
              </StImgResultList>
              {imgResults.length !== 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                  <BasePagination
                    totalPage={imageTotalPages}
                    onClickPage={(cur) => onClickPagination(cur)}
                  />
                </div>
              )}
            </>
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
  color: ${(props) => props.isWordClicked && '#fff'};

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
    color: #fff;
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
