import React, { useState, useEffect } from 'react';
import styles from 'assets/style/MyPage.module.css';
import Header from 'component/Header';
import styled from 'styled-components';
import { getMyPageUpload } from '../../api/mypage';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from 'stores';

function MyPageupload() {
  const token = useRecoilState(tokenState)[0];
  let [btn, btnChange] = useState([styles.MyPage_Word_Btn, styles.MyPage_Img_Btn_Unclick]);
  let [content, contentChange] = useState([styles.MyPage_Word_Container, styles.MyPage_Hidden]);

  function changeToWord() {
    contentChange([styles.MyPage_Word_Container, styles.MyPage_Hidden]);
    btnChange([styles.MyPage_Word_Btn, styles.MyPage_Img_Btn_Unclick]);
  }

  function changeToImg() {
    contentChange([styles.MyPage_Hidden, styles.MyPage_Img_Container]);
    btnChange([styles.MyPage_Word_Btn_Unclick, styles.MyPage_Img_Btn]);
  }

  const [wordResults, setWordResults] = useState([]);
  const [imgResults, setImgResults] = useState([]);

  useEffect(() => {
    handleUploadMeme();
  }, []);

  const handleUploadMeme = async () => {
    const param = {
      type: 'word',
      page: 0,
    };
    const data = await getMyPageUpload(param, token);
    data && setWordResults(data);
  };

  return (
    <>
      <Header />
      <StMyPageWrapper>
        <StMyPageListWrapper>
          <StMyPageList>
            <StMyPageLink href="/mypage/upload"> 등록한글 </StMyPageLink>
          </StMyPageList>
          <StMyPageList>
            <StMyPageNonSelectLink href="/mypage/bookmark"> 나의 활동 </StMyPageNonSelectLink>
            <StMyPageListChild>
              <li>
                <StMyPageNonSelectLink href="/mypage/bookmark"> 북마크</StMyPageNonSelectLink>
              </li>
              <li>
                <StMyPageNonSelectLink href="/mypage/comment"> 댓글</StMyPageNonSelectLink>
              </li>
            </StMyPageListChild>
          </StMyPageList>
          <StMyPageList>
            <StMyPageNonSelectLink href="/mypage/pw"> p/w 수정</StMyPageNonSelectLink>
          </StMyPageList>
        </StMyPageListWrapper>
        <div>
          <StBtnContainer>
            <button className={btn[0]} onClick={changeToWord}>
              {' '}
              용어
            </button>
            <button className={btn[1]} onClick={changeToImg}>
              짤{' '}
            </button>
          </StBtnContainer>
          <div className={content[0]}>
            {wordResults?.map((result) => (
              <Link to={`/detail/word/${result.id}`}>
                <StWordItem key={result.id}>
                  {result.title}
                  {result.description}
                </StWordItem>
              </Link>
            ))}
            <hr />
          </div>

          <div className={content[1]}>
            <StMyPageImg src={require('assets/img/detailPage/무야호.png')} alt="짤"></StMyPageImg>
          </div>
        </div>
      </StMyPageWrapper>
    </>
  );
}

const StMyPageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  z-index: 1;
  height: 100%;
  top: 10%;
`;
const StMyPageListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  top: 10px;
  width: 190px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  height: 100vh;
`;

const StMyPageList = styled.li`
  position: relative;
  top: 130px;
  background-color: #232332;
  font-size: large;
  list-style: none;
  padding-bottom: 130px;
  padding-left: 30%;
`;

const StMyPageLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
const StMyPageNonSelectLink = styled.a`
  text-decoration: none;
  color: gray;
`;
const StMyPageListChild = styled.ul`
  background-color: #232332;
  list-style: none;
  position: relative;
  left: -25px;
  padding-top: 10px;
  text-align: center;
  line-height: 25px;
`;
const StBtnContainer = styled.div`
  width: 100px;
  position: absolute;
  top: 70px;
  left: 300px;
`;

const StWordItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const StWordTitle = styled.h2`
  font-weight: bold;
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
  margin-top: 30px;
`;
const StWordContent = styled.p`
  color: white;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StMyPageImg = styled.img`
  padding-right: 50px;
  padding-bottom: 30px;
  width: 300px;
  height: 225px;
`;

export default MyPageupload;
