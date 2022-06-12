import { useState, useEffect } from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getMemeWithType, getMemeWithCategory } from '../api/posts';

function CategoryResultPage() {
  let params = useParams();

  const [wordResults, setWordResults] = useState([]);
  const [imgResults, setImgResults] = useState([]);

  useEffect(() => {
    //type만 파라미터로 넘겨준 경우
    if (params.category === undefined) {
      async function handleGetMemeWithType() {
        try {
          if (params.type === '단어') {
            const { data } = await getMemeWithType('word');
            setWordResults(
              data.content.map((res) => ({
                id: res.id,
                title: res.title,
              }))
            );
          } else {
            const { data } = await getMemeWithType('image');

            setImgResults(
              data.content.map((res) => ({
                id: res.id,
                title: res.title,
                url: res.image,
              }))
            );
          }
        } catch (err) {
          return null;
        }
      }
      handleGetMemeWithType();
    }
    //type과 category 를 파라미터로 넘겨준 경우
    else {
      async function handleGetMemeWithCategory() {
        try {
          const param = {
            type: params.type === '단어' ? 'word' : 'image',
            category: params.category,
          };
          const { data } = await getMemeWithCategory(param);
          console.log(data);

          if (params.type === '단어') {
            setWordResults(
              data.content.map((res) => ({
                id: res.id,
                title: res.title,
              }))
            );
          } else {
            setImgResults(
              data.content.map((res) => ({
                id: res.id,
                title: res.title,
                url: res.image,
              }))
            );
          }
        } catch (err) {
          return null;
        }
      }
      handleGetMemeWithCategory();
    }
  }, []);

  return (
    <>
      <Header />
      <StWrapper>
        <StResultWrapper>
          {params.type === '단어' ? (
            <StWordResultList>
              {wordResults.length === 0 && (
                <p
                  style={{
                    display: 'flex',
                    height: 'calc(100vh/2)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  검색 결과가 없습니다.
                </p>
              )}
              {wordResults.map((result) => (
                <Link to={`/detail/word/${result.id}`} key={result.id}>
                  <StWordItem>{result.title}</StWordItem>
                </Link>
              ))}
            </StWordResultList>
          ) : (
            <StImgResultList>
              {imgResults.length === 0 && (
                <p
                  style={{
                    display: 'flex',
                    height: 'calc(100vh/2)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  검색 결과가 없습니다.
                </p>
              )}
              {imgResults.map((result) => (
                <Link to={`/detail/image/${result.id}`} key={result.id}>
                  <StImgResultItem>
                    <img src={result.url} alt="짤" />
                    <StImgTitleWrapper>
                      <StImgTitle>{result.title}</StImgTitle>
                    </StImgTitleWrapper>
                  </StImgResultItem>
                </Link>
              ))}
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
  width: 100%;
  padding: 50px 51px;
`;

const StWordResultList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  & > p {
    font-size: 24px;
    font-weight: bold;
  }
`;
const StWordItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  color: #fff;

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
  width: 100%;
  text-align: center;
  & > p {
    font-size: 24px;
    font-weight: bold;
  }
`;

const StImgResultItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  text-indent: 15px;
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
  color: #fff;
`;
