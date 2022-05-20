import React, { useState } from 'react';

import Header from '../component/Header.js';
import BaseModal from '../component/base/BaseModal';
import styled from 'styled-components';

function MyPagepw() {
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');
  const [newPW, setnewPW] = useState('');
  const [verifyNewPW, setVerifyNewPw] = useState('');

  function quitModalOpen() {
    setShowModal(true);
    setModalContents('정말 탈퇴하시겠습니까?');
  }

  function pwChangeModalOpen() {
    if (newPW.length < 5) {
      setShowModal(true);
      setModalContents('비밀번호는 5글자 이상이어야 합니다.');
    } else if (newPW.length >= 5 && newPW === verifyNewPW) {
      setShowModal(true);
      setModalContents('정말 변경하시겠습니까?');
    } else if (newPW.length >= 5 && newPW !== verifyNewPW) {
      setShowModal(true);
      setModalContents('비밀번호가 일치하지 않습니다');
    }
  }

  const handleNewPassword = (e) => {
    setnewPW(e.target.value);
  };

  return (
    <>
      <Header />
      <BaseModal
        hidden={!showModal}
        content={modalContents}
        hideModal={() => {
          setShowModal(false);
        }}
        withdrawal={newPW === verifyNewPW && true}
      />
      <StMyPageWrapper>
        <StMyPageListWrapper>
          <StMyPageList>
            <StMyPageNonSelectLink href="/mypage/upload"> 등록한글 </StMyPageNonSelectLink>
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
            <StMyPageLink href="/mypage/pw"> p/w 수정</StMyPageLink>
          </StMyPageList>
        </StMyPageListWrapper>

        <StPwContainer>
          <StMyPagePw>현재 비밀번호</StMyPagePw>
          <StPwInput type="text"></StPwInput>
          <StMyPagePw>비밀번호 수정</StMyPagePw>
          <StPwInput type="text" value={newPW} onChange={handleNewPassword} />
          <StMyPagePw>비밀번호 확인</StMyPagePw>
          <StPwInput
            type="text"
            value={verifyNewPW}
            onChange={(e) => setVerifyNewPw(e.target.value)}
          />
          <StChangeBtn onClick={pwChangeModalOpen}>변경</StChangeBtn>
          <StMyPageDelete onClick={quitModalOpen}>회원탈퇴</StMyPageDelete>
        </StPwContainer>
      </StMyPageWrapper>
    </>
  );
}

const StMyPageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;

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

const StPwContainer = styled.div`
  position: relative;
  top: 90px;
  left: 10%;
  height: 500px;
  width: 1200px;
`;

const StMyPagePw = styled.h3`
  width: 90%;
  position: relative;
  left: 70px;
  top: 70px;
  color: white;
  margin-bottom: 10px;
`;
const StPwInput = styled.input`
  position: relative;
  margin-bottom: 40px;
  left: 70px;
  border-radius: 10px;
  width: 610px;
  height: 35px;
  top: 70px;
`;

const StChangeBtn = styled.button`
  color: white;
  width: 70px;
  background-color: gray;
  border-radius: 10px;
  position: relative;
  left: 80px;
  top: 70px;
`;
const StMyPageDelete = styled.button`
  height: 30px;
  color: red;
  border: 1px red solid;
  background-color: #232332;
  position: relative;
  left: 400px;
  top: 250px;
`;
export default MyPagepw;
