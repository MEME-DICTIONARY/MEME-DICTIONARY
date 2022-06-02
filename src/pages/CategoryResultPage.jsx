import { useState, useEffect } from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getMemeWithCategory } from '../api/posts';

function CategoryResultPage() {
  let params = useParams();

  const [wordResults, setWordResults] = useState([]);
  const [imgResults, setImgResults] = useState([]);

  useEffect(() => {
    //type만 파라미터로 넘겨준 경우
    if (params.category === undefined) {
      handleGetMemeWithType();
    }
    //type과 category 를 파라미터로 넘겨준 경우
    else {
      handleGetMemeWithCategory();
    }
  }, []);

  const handleGetMemeWithType = async () => {
    const param = {
      type: params.type,
      category: '',
    };
    const { data } = await getMemeWithCategory(param);

    if (params.type === '단어') {
      setWordResults(data.content);
    } else {
      setImgResults(
        data.content.map((_, idx) => ({
          title: data.content[idx].title,
          url: require('../assets/img/sample.jpeg'),
        }))
      );
    }
  };

  const handleGetMemeWithCategory = async () => {
    const param = {
      type: params.type,
      category: params.category,
    };
    const { data } = await getMemeWithCategory(param);

    if (params.type === '단어') setWordResults(data.content);
    else {
      setImgResults(
        data.content.map((_, idx) => ({
          title: data.content[idx].title,
          url: require('../assets/img/sample.jpeg'),
        }))
      );
    }
  };

  return (
    <>
      <Header />
      <StWrapper>
        <StResultWrapper>
          {params.type === '단어' ? (
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
              <Link to={'/detail/word'}>
                {wordResults.map((result) => (
                  <StWordItem key={result.id}>{result.title}</StWordItem>
                ))}
              </Link>
            </StWordResultList>
          ) : (
            <StImgResultList>
              {imgResults.map((result) => {
                return (
                  <Link to={'/detail/image'}>
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
          )}
        </StResultWrapper>
      </StWrapper>
    </>
  );
}

export default CategoryResultPage;

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #232332;
  color: #fff;
  width: 100%;
`;

const StResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 51px;
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
