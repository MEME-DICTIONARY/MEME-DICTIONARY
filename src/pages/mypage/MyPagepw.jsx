import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { passwordState } from 'stores';
import Header from 'component/Header';
import BaseModal from 'component/base/BaseModal';
import styled from 'styled-components';
import { postChangePassword } from '../../api/mypage';
import { useNavigate } from 'react-router-dom';

function MyPagepw() {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');
  const [oldPW, setOldPW] = useState('');
  const [newPW, setnewPW] = useState('');
  const [verifyNewPW, setVerifyNewPw] = useState('');
  const currentPW = useRecoilState(passwordState)[0];
  const setNewPassword = useSetRecoilState(passwordState);

  const [isVerified, setIsVerified] = useState(false);

  function quitModalOpen() {
    setShowModal(true);
    setModalContents('정말 탈퇴하시겠습니까?');
  }

  const checkPassword = () => {
    if (oldPW === '' || newPW === '' || verifyNewPW === '') {
      setShowModal(true);
      setIsVerified(false);
      setModalContents('빈 칸을 모두 입력해주세요.');
    } else {
      if (oldPW !== currentPW) {
        console.log(currentPW);
        setShowModal(true);
        setIsVerified(false);
        setModalContents('현재 비밀번호와 일치하지 않습니다.');
      } else if (newPW === oldPW) {
        setShowModal(true);
        setIsVerified(false);
        setModalContents('기존 비밀번호와 같습니다.');
      } else if (newPW.length < 5) {
        setShowModal(true);
        setIsVerified(false);
        setModalContents('비밀번호는 5글자 이상이어야 합니다.');
      } else if (newPW.length >= 5 && newPW === verifyNewPW) {
        setShowModal(true);
        setIsVerified(true);
        setModalContents('정말 변경하시겠습니까?');
      } else if (newPW.length >= 5 && newPW !== verifyNewPW) {
        setShowModal(true);
        setIsVerified(false);
        setModalContents('비밀번호가 일치하지 않습니다');
      }
    }
  };

  const handleChangePassword = async () => {
    const res = await postChangePassword({ oldPassword: oldPW, newPassword: newPW });
    if (res) {
      setNewPassword(newPW);
      navigate('/mypage/upload');
    }
  };

  return (
    <>
      <Header />

      {isVerified ? (
        <BaseModal
          hidden={!showModal}
          content={modalContents}
          hideModal={() => {
            setShowModal(false);
          }}
          check={newPW === verifyNewPW}
          onClickYes={handleChangePassword}
        />
      ) : (
        <BaseModal
          hidden={!showModal}
          content={modalContents}
          hideModal={() => {
            setShowModal(false);
          }}
        />
      )}

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
          <h3>현재 비밀번호</h3>
          <StPwInput
            type="text"
            value={oldPW}
            onChange={(e) => {
              setOldPW(e.target.value);
            }}
          ></StPwInput>
          <h3>비밀번호 수정</h3>
          <StPwInput
            type="text"
            value={newPW}
            onChange={(e) => {
              setnewPW(e.target.value);
            }}
          />
          <h3>비밀번호 확인</h3>
          <StPwInput
            type="text"
            value={verifyNewPW}
            onChange={(e) => {
              setVerifyNewPw(e.target.value);
            }}
          />
          <StChangeBtn
            onClick={() => {
              checkPassword();
            }}
          >
            변경
          </StChangeBtn>
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
  & > h3 {
    width: 90%;
    position: relative;
    left: 70px;
    top: 70px;
    color: white;
    margin-bottom: 10px;
  }
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
